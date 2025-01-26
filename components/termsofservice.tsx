"use client"
import React from 'react';
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/pageheader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TermsOfServicePage = () => {
  return (
    <div className="container max-w-[88rem] mx-auto p-6">
      <PageHeader>
        <PageHeaderHeading>Terms of Service</PageHeaderHeading>
        <PageHeaderDescription>
          These terms govern your use of our website and outline the guidelines to ensure a safe and fair experience for all users.
        </PageHeaderDescription>
      </PageHeader>
      <Card className="mt-6 p-4 bg-transparent border-zinc-300 dark:border-zinc-800">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            By accessing this website, you confirm that you agree to be bound by these terms of service. If you do not agree with any part of these terms, you should discontinue using the website immediately. The following terms ensure that all interactions on our platform remain respectful and lawful.
          </p>
          <h2 className="text-xl font-semibold mb-4">License</h2>
          <p className="mb-4">
            All intellectual property rights for the content on this website belong to us or our licensors unless explicitly stated otherwise. You are granted permission to access and use the material for personal and non-commercial purposes, subject to the limitations outlined in these terms.
          </p>
          <h2 className="text-xl font-semibold mb-4">User Contributions</h2>
          <p className="mb-4">
            Our website may allow users to share feedback, post comments, or upload materials in designated areas. Any contributions made by users reflect their own opinions and are not endorsed by us. We reserve the right to monitor and remove any content that violates these terms or applicable laws.
          </p>
          <h2 className="text-xl font-semibold mb-4">Third-Party Links</h2>
          <p className="mb-4">
            Organizations such as government agencies, search engines, and news outlets may link to our website without prior permission. However, these links do not imply any endorsement of the linked content. We are not responsible for the practices or content of any external websites.
          </p>
          <h2 className="text-xl font-semibold mb-4">Liability Disclaimer</h2>
          <p className="mb-4">
            We are not liable for any content published on external websites that may link to our platform. By linking to our website, you agree to indemnify us against any claims arising from content associated with your website. We do not accept responsibility for any potential damages or losses incurred from your use of this site.
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

export default TermsOfServicePage;
