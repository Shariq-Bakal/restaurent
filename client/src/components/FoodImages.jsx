
const FoodImages = () => {
  const images = [
    {
      id: 1,
      url: '/images/foods.jpg',
      title: 'Delicious Foods'
    },
    {
      id: 2,
      url: '/images/healthy.jpg',
      title: 'Healthy Options'
    },
    {
      id: 3,
      url: '/images/foods.jpg',
      title: 'Tasty Selection'
    },
    {
      id: 4,
      url: '/images/healthy.jpg',
      title: 'Nutritious Meals'
    },
    {
      id: 5,
      url: '/images/foods.jpg',
      title: 'Gourmet Dishes'
    },
  ];

  return (
    <div className="food-images-container">
        {images.map(img => (
          <div key={img.id} className="image-card">
            <img 
              src={img.url} 
              alt={img.title}
            />
          </div>
        ))}
    </div>
  );
};

export default FoodImages;