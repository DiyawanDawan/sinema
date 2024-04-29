const Container = ({ children }) => {
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">{children}</div>
    </section>
  );
};

export default Container;
