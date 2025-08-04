export default function Stats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gray-100">
      <div className="text-center">
        <p className="text-4xl font-bold">1,000+</p>
        <p>顧客数</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold">99%</p>
        <p>継続率</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold">50,000+</p>
        <p>年間手続き件数</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold">100+</p>
        <p>助成金採択実績</p>
      </div>
    </section>
  );
}
