import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, CreditCard, Smartphone, Copy, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import QRCodeImage from "@/assets/payments/QRCode.png";

const Payment = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankDetails = [
    { label: "Bank Name", value: "HDFC Bank" },
    { label: "Account Number", value: "50200088530632" },
    { label: "IFSC Code", value: "HDFC0003941" },
    { label: "Account Type", value: "Current" },
  ];

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Payment Details
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Make Payments <span className="text-construction-orange">Securely</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose your preferred payment method - Bank Transfer or UPI for instant processing
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-8 bg-accent/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">VINIRMANTECH PRIVATE LIMITED</CardTitle>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                      <p>
                        2nd Floor, Cyber Heights, Vibhuti Khand, Gomti Nagar,<br />
                        Lucknow – 226010, Uttar Pradesh, India
                      </p>
                    </div>
                    <p className="ml-6">
                      <strong className="text-foreground">GSTIN:</strong> 09AAJCV6077A1Z5
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

            {/* Bank Transfer */}
            <Card className="border-2 hover:shadow-elegant transition-shadow">
              <CardHeader className="border-b">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Bank Account <span className="text-construction-orange">Details</span></CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {bankDetails.map((detail) => (
                    <div key={detail.label} className="flex justify-between items-center p-3 bg-accent/30 rounded-lg group hover:bg-accent/50 transition-colors">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                        <p className="font-semibold text-lg">{detail.value}</p>
                      </div>
                      {(detail.label === "Account Number" || detail.label === "IFSC Code") && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleCopy(detail.value, detail.label)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {copiedField === detail.label ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Note:</strong> Please use your order ID or company name as the payment reference for faster processing.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* UPI Payment */}
            <Card className="border-2 hover:shadow-elegant transition-shadow">
              <CardHeader className="border-b">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">UPI <span className="text-construction-orange">Payment</span></CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Scan QR Code to Pay</h3>
                    <div className="bg-white p-6 rounded-xl inline-block border-2 border-primary/20">
                      <img
                        src={QRCodeImage}
                        alt="Scan to Pay - VINIRMANTECH PRIVATE LIMITED"
                        className="w-48 h-48 rounded-lg border-2 border-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">Or pay directly using UPI ID</p>
                    <div className="flex items-center justify-center gap-2 p-4 bg-accent/30 rounded-lg group hover:bg-accent/50 transition-colors">
                      <p className="font-bold text-xl text-primary">nirmannext@hdfcbank</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleCopy("nirmannext@hdfcbank", "UPI")}
                      >
                        {copiedField === "UPI" ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>Instant Confirmation:</strong> UPI payments are verified immediately after successful transaction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Instructions */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Payment <span className="text-construction-orange">Guidelines</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Choose Payment Method</h3>
                  <p className="text-sm text-muted-foreground">
                    Select between Bank Transfer or UPI based on your preference
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Make Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete the transaction using the provided account details
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Share Confirmation</h3>
                  <p className="text-sm text-muted-foreground">
                    Send payment screenshot to our support team for verification
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with <span className="text-construction-orange">Payment</span>?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with any payment-related queries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919818069092" style={{ textDecoration: 'none' }}>
              <Button size="lg" variant="secondary">
                Contact Support
              </Button>
            </a>
            <a href="mailto:support@nirmannext.com" style={{ textDecoration: 'none' }}>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
