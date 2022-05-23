import ProductCard from '../product-card/product-card.conponent';
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {

  return (
    <div className='category-preview-container'>
      <h2>
        <span className='title'>{title.toUpperCase()}</span>
      </h2>
      <div className='preview'>
        {
          // first arg is ? and is ignored/not
          // keep item if it's index is it's less than 4
          // filter: if it evals to false, it filyters those items out
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </div>
    </div>
  );
};

export default CategoryPreview;