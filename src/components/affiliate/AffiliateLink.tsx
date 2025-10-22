// src/components/affiliate/AffiliateLink.tsx
'use client';

import React from 'react';

type Partner = 'direct' | 'amazon' | 'network';

type Props = {
  href?: string | null;      // allow null while we wait for approvals
  children: React.ReactNode; // button/link label
  productId: string;         // e.g., 'neuro-mag'
  partner: Partner;          // 'direct' | 'amazon' | 'network'
  className?: string;        // pass Tailwind classes from the parent
  onClickExtra?: () => void; // optional extra action
};

export default function AffiliateLink({
  href,
  children,
  productId,
  partner,
  className,
  onClickExtra,
}: Props) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'affiliate_click', {
        event_category: 'engagement',
        event_label: `${productId}:${partner}`,
        product_id: productId,
        partner,
      });
    }
    onClickExtra?.();
  };

  if (!href) {
    // Graceful disabled state while links are pending
    return (
      <button
        type="button"
        disabled
        className={`opacity-60 cursor-not-allowed ${className ?? ''}`}
        aria-disabled="true"
        title="Link coming soon"
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}

