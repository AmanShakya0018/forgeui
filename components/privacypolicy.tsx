"use client"
import React from 'react';
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/pageheader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PrivacyPolicyPage = () => {
  return (
    <div className="container max-w-[88rem] mx-auto p-6">
      <PageHeader>
        <PageHeaderHeading>Privacy Policy</PageHeaderHeading>
        <PageHeaderDescription>
          Your privacy is important to us. Currently, we do not collect any personal data from users as it is not required for the features available on our platform.
        </PageHeaderDescription>
      </PageHeader>
      <Card className="mt-6 p-4 bg-transparent border-zinc-300 dark:border-zinc-800">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            We respect your privacy and are committed to ensuring that your personal information remains secure. At this time, we do not collect any personal data directly from our users. This approach allows us to provide our services with minimal intrusion and ensures your data stays entirely within your control.
          </p>
          <h2 className="text-xl font-semibold mb-4">No Data Collection</h2>
          <p className="mb-4">
            Our platform is designed to provide its current features without requiring any personal information from users. As a result, you can use our services without sharing any data with us. We believe in transparency and simplicity, ensuring that your privacy is preserved by default. By not collecting data, we eliminate risks associated with data breaches or misuse, further enhancing your trust in our services.
          </p>
          <h2 className="text-xl font-semibold mb-4">Future Updates</h2>
          <p className="mb-4">
            If we introduce new features in the future that require the collection of personal data, we will update this policy accordingly and ensure that you are informed in advance. Any such changes will adhere to applicable laws and prioritize your privacy and security. We are committed to providing clear and concise information about any updates to this policy.
          </p>
          <p className="mb-4">
            Additionally, we will provide clear options for you to control the sharing of your information, ensuring that you remain in full control of your data at all times. Our goal is to maintain the highest level of transparency and user empowerment, building a relationship based on trust and respect.
          </p>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            If you have any questions or feedback about this policy, feel free to contact us on Twitter by clicking the button below. We are always open to hearing from our users and value your input in helping us improve our platform and policies.
          </p>
          <Button>
            <a href="https://twitter.com/AmanShakya0018" target="_blank" rel="noopener noreferrer">
              Contact Support
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicyPage;
