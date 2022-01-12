 <AnyImage className={styles.backImg} src={pageData.bckImage} />
       <img className={styles.backImg} src={imgUrlBuilder.image(pageData.bckImage)} alt="" />
       <div className={styles.info}>
        <h2>{pageData.title}</h2>
        <BlockContent className={styles.subtitle} blocks={pageData.description} />
        <Swiper
          className={styles.carousel}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              width: 300
            },
            800: {
              slidesPerView: 2
            },
            1218: {
              slidesPerView: 3
            }
          }}
        >
          {pageData.testimonials.map(item => {
            return <SwiperSlide key={item._key} className={styles.card}>
              <AnyImage className={styles.cardImage} src={item.image} />
              <BlockContent className={styles.cardText} blocks={item.description} />
            </SwiperSlide>
          })}
        </Swiper>
      </div> 
      //  </Parallax>
    </div>