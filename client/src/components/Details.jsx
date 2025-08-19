const Details = () => {
  const items = [
    {
      img: "/images/foods.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda voluptates repudiandae ut ex fuga, et totam."
    },
    {
      img: "/images/foods.jpg",
      text: "Commodi obcaecati eum enim quaerat quae porro eaque soluta modi cupiditate ut? Laudantium, recusandae?"
    },
    {
      img: "/images/foods.jpg",
      text: "Aliquid magni dicta vel molestias incidunt illum reprehenderit corrupti omnis at expedita distinctio!"
    }
  ];

  return (
    <section className="details-container">
        <div className="detail-item">
            <div className="image">
            <img src="/images/foods.jpg" />
          </div>
          <div className="info">
            <h2>Losos & Vegetables</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos asperiores, maxime harum id hic incidunt dolorem culpa natus voluptates nostrum ipsum facere magnam? Et unde deleniti voluptatibus tenetur repudiandae architecto.</p>
          </div>
        </div>

        <div className="detail-item">
              <div className="info">
                <h2>Losos & Vegetables</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iusto at tenetur ex natus suscipit consequatur libero, minima fugiat quia quod quo dignissimos, doloremque cum facilis optio corrupti, eligendi quibusdam?</p>
          </div>
            <div className="image">
            <img src="/images/foods.jpg"/>
          </div>
        </div>

         <div className="detail-item">
            <div className="image">
            <img src="/images/foods.jpg"/>
          </div>
              <div className="info">
                <h2>Losos & Vegetables</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi eaque, ea sunt eveniet sapiente asperiores eligendi vero tempora. Eos quae id praesentium! Nulla harum dolor quia impedit odio dolorum?</p>
          </div>
        </div>

    </section>
  );
};

export default Details;
