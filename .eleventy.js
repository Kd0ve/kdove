module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/js/");

    eleventyConfig.addWatchTarget("src/");
    eleventyConfig.addWatchTarget("src/css/");
    eleventyConfig.addWatchTarget("src/_includes/");
    eleventyConfig.addWatchTarget("src/_includes/layout/base.html");
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'md',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}