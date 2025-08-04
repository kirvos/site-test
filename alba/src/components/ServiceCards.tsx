import Link from 'next/link';

const services = [
  { title: '社会保険アウトソーシング', href: '/services/social-insurance' },
  { title: 'スポット手続き代行', href: '/services/spot-procedure' },
  { title: '助成金・補助金申請代行', href: '/services/subsidy' },
  { title: '自治体向けBPOサービス', href: '/services/bpo' },
];

export default function ServiceCards() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">サービス</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <Link key={service.title} href={service.href} className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
            <h3 className="text-xl font-bold">{service.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
