const router = require('express').Router()
const Book = require('../models/books')

// books.get('/seed', (req, res) => {
//     Book.insertMany([{
//         "title": "The World Beer Guide",
//         "description": "The World Beer Guide by Roger Protz is a comprehensive and authoritative reference, providing a diverse and detailed exploration of beers from around the globe, including their history, styles, and brewing techniques.",
//         "imageURL": "https://m.media-amazon.com/images/I/51MSWW8HTYL._AC_UF1000,1000_QL80_.jpg",
//         "author": 'Roger Protz',
//         "quantity": 10,
//       },
//       {
//         "title": "Dracula",
//         "description": "Dracula by Bram Stoker is a Gothic horror novel that follows the eerie and suspenseful tale of Count Dracula's attempt to move from Transylvania to England in search of new blood, while a group of determined individuals led by Professor Van Helsing strives to thwart his sinister plans.",
//         "imageURL": "https://www.bl.uk/britishlibrary/~/media/bl/global/dl%20romantics%20and%20victorians/collection-items-manual/s/t/o/stoker-bram-front-b20137-20.jpg",
//         "author": 'Bram Stoker',
//         "quantity": 6,
//       },
//       {
//         "title": "How to Win Friends & Influence People",
//         "description": "How to Win Friends and Influence People by Dale Carnegie is a timeless self-help classic that offers practical advice on building meaningful relationships, improving communication skills, and positively impacting others to achieve personal and professional success.",
//         "imageURL": "https://m.media-amazon.com/images/I/71vK0WVQ4rL._AC_UF1000,1000_QL80_.jpg",
//         "author": "Dale Carnegie",
//         "quantity": 10,
//       },
//       {
//         "title": "The Last Unicorn",
//         "description": "The Last Unicorn by Peter S. Beagle is a captivating fantasy novel that follows the journey of the last remaining unicorn as she sets out on a quest to discover her kind, facing enchanting wonders and dark perils while exploring the themes of love, identity, and the human condition.",
//         "imageURL": "https://i.pinimg.com/originals/8f/7e/5b/8f7e5b0fcfae3661d292b231c60f8437.jpg",
//         "author": "Peter S. Beagle",
//         "quantity": 14,
//       }])
//         .then(res.status(200).json({
//             message: 'Seed successful'
//         }))
//         .catch(res.status(400).json({
//             message: 'Seed unsuccessful'
//         }))
// })


router.get('/', async (req, res) => {
    const books = await Book.find()
    res.prependOnceListener('index', { books })
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const book = await Book.findById(id).populate('author')
    res.render('show', {
        book
    })
})

router.post('/', async (req, res) => {
    await Book.create(req.body)
    res.status(303).redirect('/books/')
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    if (!req.body.image) req.body.image = 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

    await Book.findByIdAndUpdate(id, req.body)
    res.status(303).redirect(`/books/${id}`)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await Book.findByIdAndDelete(id)
    res.status(303).redirect('/books')
})

module.exports = router