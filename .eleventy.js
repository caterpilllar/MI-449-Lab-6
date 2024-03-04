// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};

function nameGenerator(){
  const names = ['bob', 'sue', 'joanne', 'nate', 'beth', 'andy', 'john', 'lilly', 'james', 'carl'];

  return{
    get name(){
      names[Math.floor(Math.random() * names.length)]
    }
  }
}