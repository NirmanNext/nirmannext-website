import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { db } from "@/lib/firebase"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import citiesData from "@/data/IndianStatesCities.json" // import your JSON file

// ✅ TypeScript fix for grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>
      ready: (cb: () => void) => void
    }
  }
}

interface JoinFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function JoinFormDialog({ open, onOpenChange }: JoinFormDialogProps) {
  const [profession, setProfession] = useState("")
  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [cityOptions, setCityOptions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const allowedCities: string[] = citiesData.AllowedCities || []

  // Update cities when state changes
  useEffect(() => {
    if (selectedState && citiesData[selectedState]) {
      setCityOptions(citiesData[selectedState])
      setSelectedCity("")
    } else {
      setCityOptions([])
      setSelectedCity("")
    }
  }, [selectedState])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setLoading(true)
    setSuccess(false)
    setErrors({})

    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    // ✅ Validation regex
    const phoneRegex = /^[0-9]{10}$/
    const pinRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/
    let newErrors: { [key: string]: string } = {}

    if (!phoneRegex.test(data.contactNumber as string)) {
      newErrors.contactNumber = "Enter a valid 10-digit phone number."
    }
    if (!pinRegex.test(data.pincode as string)) {
      newErrors.pincode =
        "Enter a valid 6-digit PIN code (e.g., 110001 or 110 001)."
    }

    // ✅ Validate city against allowed list
    if (!allowedCities.includes(selectedCity)) {
      newErrors.city = `We are operational in ${allowedCities.join(", ")}. Coming soon to your city.`
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setLoading(false)
      return
    }

    try {
      // ✅ Wait for reCAPTCHA script
      const token = await new Promise<string>((resolve, reject) => {
        if (!window.grecaptcha) {
          reject(new Error("reCAPTCHA not loaded"))
          return
        }
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, {
              action: "submit",
            })
            .then(resolve)
            .catch(reject)
        })
      })

      if (!token) {
        setErrors({ captcha: "reCAPTCHA verification failed. Try again." })
        setLoading(false)
        return
      }

      // Check if Firestore is available
      if (!db) {
        setErrors({ 
          firestore: "Database is not configured. Please check your environment variables." 
        })
        setLoading(false)
        return
      }

      // Save data to Firestore
      await addDoc(collection(db, "joinRequests"), {
        ...data,
        state: selectedState,
        city: selectedCity,
        recaptchaToken: token,
        createdAt: Timestamp.now(),
      })

      setSuccess(true)
      form.reset()
      setProfession("")
      setSelectedState("")
      setSelectedCity("")
      onOpenChange(false)
    } catch (error: any) {
      console.error("Error saving form data:", error)
      setErrors({
        firestore: `❌ Firestore error: ${error.code || "unknown"} - ${
          error.message
        }`,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Earn with Us</DialogTitle>
          <DialogDescription>
            Fill out your details and we’ll get back to you soon.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>

          {/* Contact Number */}
          <div>
            <Label htmlFor="contactNumber">Contact Number</Label>
            <Input
              id="contactNumber"
              type="tel"
              name="contactNumber"
              placeholder="10-digit mobile"
              required
            />
            {errors.contactNumber && (
              <p className="text-red-600 text-sm">{errors.contactNumber}</p>
            )}
          </div>

          {/* Profession Dropdown */}
          <div>
            <Label htmlFor="profession">Profession</Label>
            <select
              id="profession"
              name="profession"
              className="w-full border rounded p-2 bg-background"
              onChange={(e) => setProfession(e.target.value)}
              required
            >
              <option value="">Select...</option>
              <option value="Dealer">Dealer</option>
              <option value="Architect">Architect</option>
              <option value="Civil Engineer">Civil Engineer</option>
              <option value="Contractor">Contractor</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {profession === "Other" && (
            <div>
              <Label htmlFor="otherProfession">Specify Profession</Label>
              <Input id="otherProfession" name="otherProfession" />
            </div>
          )}

          {/* Location Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="state">State</Label>
              <select
                id="state"
                name="state"
                className="w-full border rounded p-2 bg-background"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                required
              >
                <option value="">Select State...</option>
                {Object.keys(citiesData)
                  .filter((k) => k !== "AllowedCities")
                  .map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <select
                id="city"
                name="city"
                className="w-full border rounded p-2 bg-background"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                required
                disabled={!selectedState}
              >
                <option value="">Select City...</option>
                {cityOptions.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className="text-red-600 text-sm">{errors.city}</p>
              )}
            </div>
            
            {/* PIN Code */}
              <div>
                <Label htmlFor="pincode">PIN Code</Label>
                <Input
                  id="pincode"
                  type="text"
                  name="pincode"
                  placeholder="6-digit PIN code"
                  required
                />
                {errors.pincode && (
                  <p className="text-red-600 text-sm">{errors.pincode}</p>
                )}
              </div>
          </div>

          {/* reCAPTCHA error display */}
          {errors.captcha && (
            <p className="text-red-600 text-sm text-center">{errors.captcha}</p>
          )}

          {/* Submit */}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>

          {success && (
            <p className="text-green-600 text-sm text-center">
              ✅ Your details have been submitted successfully!
            </p>
          )}

          {errors.firestore && (
            <p className="text-red-600 text-sm text-center">
              {errors.firestore}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
