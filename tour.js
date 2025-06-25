document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('sliderr')
  const prevBtn = document.getElementById('prevBtn')
  const nextBtn = document.getElementById('nextBtn')

  const images = [
    'image/tourphotolocation1.png',
    'image/tourphotolocation2.png',
    'image/tourphotolocation3.png'
  ]

  let current = 0

  function updateSlider() {
    slider.style.backgroundImage = `url(${images[current]})`
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length
    updateSlider()
  })

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length
    updateSlider()
  })

  updateSlider() // Установка стартового изображения

  // Слайдер 2 для .house
  const photoBlock2 = document.querySelector('.housesliderphoto')
  const prevBtn2 = document.getElementById('prev')
  const nextBtn2 = document.getElementById('next')
  const images2 = ['image/home1.png', 'image/home2.png', 'image/home3.png']
  let currentIndex2 = 0

  function updateBackground2() {
    photoBlock2.style.backgroundImage = `url('${images2[currentIndex2]}')`
  }

  prevBtn2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length
    updateBackground2()
  })

  nextBtn2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 + 1) % images2.length
    updateBackground2()
  })

  updateBackground2()

  //gfgfgfg
  // Слайдер 3 для .reviewsphoto
  const photoBlock3 = document.querySelector('.reviewsphoto')
  const prevBtn3 = document.getElementById('prevReviews')
  const nextBtn3 = document.getElementById('nextReviews')

  // Массив с изображениями (с расширением)
  const images3 = [
    'image/image20.png', // Добавьте расширение файла
    'image/image21.png' // Добавьте расширение файла
  ]

  let currentIndex3 = 0

  // Функция обновления фона
  function updateBackground3() {
    photoBlock3.style.backgroundImage = `url('${images3[currentIndex3]}')`
  }

  // Обработчик события на кнопке "prev"
  prevBtn3.addEventListener('click', () => {
    currentIndex3 = (currentIndex3 - 1 + images3.length) % images3.length
    updateBackground3()
  })

  // Обработчик события на кнопке "next"
  nextBtn3.addEventListener('click', () => {
    currentIndex3 = (currentIndex3 + 1) % images3.length
    updateBackground3()
  })

  // Установить начальное изображение
  updateBackground3()
})











