import Breadcrumbs from './Breadcrumbs';
import { getServiceBreadcrumbs, type ServicePageKey } from '../constants/serviceLinks';

type ServiceBreadcrumbBarProps = {
  pageKey: ServicePageKey | 'services';
  currentLabel?: string;
  onNavigate?: (page: string) => void;
};

/** Shared breadcrumb strip for service (and services hub) pages */
export default function ServiceBreadcrumbBar({
  pageKey,
  currentLabel,
  onNavigate,
}: ServiceBreadcrumbBarProps) {
  return (
    <section className="border-b border-gray-100 bg-white py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          onNavigate={onNavigate}
          items={getServiceBreadcrumbs(pageKey, currentLabel)}
        />
      </div>
    </section>
  );
}
