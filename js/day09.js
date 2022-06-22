const article = document.querySelector('article')
console.log(article.children)

Array.from(article.children).forEach(child => {
    child.classList.add('article-child')
})