import React, { useContext, useState } from 'react';
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';
import { toast } from 'react-toastify';

const Home = () => {
  const { data } = useContext(recipecontext);
  const recipes = data || [];
  const [category, setCategory] = React.useState();
  const [searchData, setSearchData] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  const findingBySearch = () => {
    if(searchData === "") return toast.error("Please enter something to search")
    const search = data.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchData.toLowerCase())
    );
    setSearchResults(search);
    setSearchActive(true);
  };

  const filteredRecipes = (category) => {
    const filter = data.filter((recipe) => recipe.category === category);
    return filter.map((recipe) => {
      return <RecipeCard key={recipe.id} recipe={recipe} />;
    });
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      findingBySearch();
    }
  };

  return (
    <div className="home-page min-h-screen bg-gray-700 text-white">
      {/* Main Hero Section */}
      <section className="hero-section relative h-96 mb-16">
        <img
          src="/src/assets/recipes.jpg"
          alt="Culinary Creations"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-5xl font-bold mb-6">Transform Your Kitchen Experience</h1>
            <div className="search-bar max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full px-6 py-4 rounded-full bg-white bg-opacity-90 text-gray-800"
                onChange={(e) => setSearchData(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              />
            </div>
          </div>
        </div>
      </section>
      <section className='flex gap-8 p-5 flex-wrap items-center justify-center'>
        {searchActive ? (
          searchResults.length > 0 ? searchResults.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />) : <h1 className='border bg-gray-800 px-5 py-5 rounded-xl font-bold text-2xl text-red-500 m-auto'>No Recipe found for your search </h1>
        ) : null}
      </section>
      {/* Featured Categories */}
      <section className="categories mb-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Breakfast', 'Lunch', 'Dinner', 'Sweet', 'Supper'].map((category) => (
            <div
              key={category}
              className="category-card bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all cursor-pointer border"
              onClick={() => setCategory(category)}
            >
              <h3 className="text-xl font-semibold text-center">{category}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* Recipe Showcase */}
      <section className="featured-recipes px-6 mb-16 ">
        <h2 className="text-3xl font-bold mb-8 text-yellow-500">Featured Recipes</h2>
        <div className="flex flex-wrap -mx-4 gap-5">
          {filteredRecipes(category).length > 0 ? filteredRecipes(category) : <h1 className='border bg-gray-800 px-5 py-5 rounded-xl font-bold text-2xl text-red-500 m-auto'>No Recipe found for this category </h1>}
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="newsletter bg-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Culinary Community</h2>
          <p className="text-gray-300 mb-8">Get weekly recipe inspiration and cooking tips</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="md:w-96 px-6 py-3 rounded-lg bg-gray-700 text-white"
            />
            <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

