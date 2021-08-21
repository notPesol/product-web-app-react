import Hero from "./Hero";
import Grid from "./Grid";
import Thumb from "./Thumb";

// hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
import Spinner from "./Spinner";

const Home = () => {
  const { state: products, data, loading, error } = useHomeFetch();
  console.log(products);
  console.log(data);
  if (loading) {
    return (
      <Spinner />
    )
  }

  if (error) {
    return (
      <div>Something went wrong</div>
    )
  }

  return (
    <>
      <Hero data={data} />
      <Grid title="Products">
        {products.map((product) => (
          <Thumb key={product._id}
            id={product._id}
            name={product.name}
            description={product.description}
            img={product.images[0]}
            price={product.price}
            clickable
          />
        ))}
      </Grid>
    </>
  )
}

export default Home;