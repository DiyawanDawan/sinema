import MuviCardPopuler from "../Fragments/MuviCardPopuler"

const HomeCard = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg ">
          <MuviCardPopuler>
            <MuviCardPopuler.MuviCardPopulerHeader cardTitle="Top Reted"></MuviCardPopuler.MuviCardPopulerHeader>
            <MuviCardPopuler.MuviCardPopulerBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam ex eos</MuviCardPopuler.MuviCardPopulerBody>
            <MuviCardPopuler.MuviCardPopulerFooter></MuviCardPopuler.MuviCardPopulerFooter>
          </MuviCardPopuler>
          <MuviCardPopuler calass="blue-100">
            <MuviCardPopuler.MuviCardPopulerHeader cardTitle="Populers Muvie"></MuviCardPopuler.MuviCardPopulerHeader>
            <MuviCardPopuler.MuviCardPopulerBody> nulla perferendis necessitatibus beatae non, illum qui aut nesciunt doloremque</MuviCardPopuler.MuviCardPopulerBody>
            <MuviCardPopuler.MuviCardPopulerFooter></MuviCardPopuler.MuviCardPopulerFooter>
          </MuviCardPopuler>
        </div>
      </div>
    </section>
  )
}

export default HomeCard