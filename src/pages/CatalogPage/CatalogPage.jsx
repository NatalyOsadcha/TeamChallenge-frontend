import products from '../../products'; /// To change on request to BackEnd
import Product from '../../components/Product/Product';

export default function CatalogPage() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map(item => (
          <Product item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
