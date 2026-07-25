import { Star, Phone, MessageCircle } from 'lucide-react';
import { PHONE_TEL, PHONE_PRIMARY_DISPLAY, WHATSAPP_URL } from '../constants/nap';

export interface TestimonialOption {
  name: string;
  location?: string;
  rating: number;
  text: string;
}

interface TrustReviewsSectionProps {
  /** Google rating (e.g. 4.7) */
  rating?: number;
  /** Customer count for "Trusted by X+ customers" */
  customerCount?: number;
  /** Optional testimonial - omit for placeholder */
  testimonial?: TestimonialOption;
  /** Accent color: 'blue' | 'green' | 'neutral' */
  variant?: 'blue' | 'green' | 'neutral';
}

export default function TrustReviewsSection({
  rating = 4.7,
  customerCount = 1000,
  testimonial,
  variant = 'blue',
}: TrustReviewsSectionProps) {
  const variantStyles = {
    blue: 'bg-blue-50 border-blue-100 text-blue-600',
    green: 'bg-green-50 border-green-100 text-green-600',
    neutral: 'bg-gray-50 border-gray-200 text-gray-700',
  };

  const ctaStyles = {
    blue: {
      call: 'bg-blue-700 hover:bg-blue-800 text-white',
      whatsapp: 'bg-[#075E54] hover:bg-[#064e46] text-white',
    },
    green: {
      call: 'bg-green-800 hover:bg-green-900 text-white',
      whatsapp: 'bg-[#075E54] hover:bg-[#064e46] text-white',
    },
    neutral: {
      call: 'bg-gray-800 hover:bg-gray-900 text-white',
      whatsapp: 'bg-[#075E54] hover:bg-[#064e46] text-white',
    },
  };

  const styles = ctaStyles[variant];

  return (
    <div className="py-12 sm:py-16 bg-white" aria-labelledby="trust-reviews-heading">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h3 id="trust-reviews-heading" className="sr-only">
          Trust &amp; Reviews
        </h3>

        {/* Rating & Trust badge */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl border ${variantStyles[variant]}`}
        >
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={20}
                  className={i <= Math.floor(rating) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="font-bold text-lg">{rating} Google</span>
          </div>
          <p className="text-sm sm:text-base font-medium opacity-90">
            Trusted by {customerCount}+ customers in Bengaluru
          </p>
        </div>

        {/* Testimonial - placeholder or actual */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl bg-gray-50 border border-gray-100">
          {testimonial ? (
            <>
              <div className="flex gap-1 mb-3" aria-hidden="true">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="mt-3 text-sm font-medium text-gray-900">
                {testimonial.name}
                {testimonial.location && (
                  <span className="font-normal text-gray-500"> — {testimonial.location}</span>
                )}
              </p>
            </>
          ) : (
            <div className="text-center py-4 sm:py-6">
              <p className="text-gray-500 text-sm italic">
                Customer testimonial placeholder — add your best review here
              </p>
              <p className="mt-2 text-xs text-gray-600">RJR Safety Nets, Bengaluru</p>
            </div>
          )}
        </div>

        {/* CTA Buttons - mobile-first stacked on small screens */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href={PHONE_TEL}
            className={`flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 rounded-lg font-semibold transition-colors ${styles.call}`}
            aria-label={`Call RJR Safety Nets at ${PHONE_PRIMARY_DISPLAY}`}
          >
            <Phone size={20} aria-hidden="true" />
            Call {PHONE_PRIMARY_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 rounded-lg font-semibold transition-colors ${styles.whatsapp}`}
            aria-label="WhatsApp RJR Safety Nets"
          >
            <MessageCircle size={20} aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
