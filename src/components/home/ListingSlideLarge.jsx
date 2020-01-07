import React from 'react';

class ListingSlideLarge extends React.PureComponent {
  // constructor(props){
  //   super(props)
  // }

  render(){
    let slide_data = this.props.slide_data
    let slide_list = slide_data.map((slide) => {
      return (
        <div className="swiper-slide" data-tag={slide.id}  key={slide.id}>
          <div className="post big-post  max-h-400">
            <a href={`/homes/${slide.first_room.address_url}/${slide.first_room.room_id}`} className="hoverBorder" title={`${slide.first_room.sub_name}`}>
              <span className="hoverBorderWrapper">
                <img src={slide.first_room.featured_image} className="img-fluid img-cover" alt={`${slide.first_room.sub_name}`} title={`${slide.first_room.sub_name}`} />
                <span className="theHoverBorder" />
              </span>
            </a>
            <div className="post-details">
              <h3 className="m_title">
                <a href={`/homes/${slide.first_room.address_url}/${slide.first_room.room_id}`} title={`${slide.first_room.sub_name}`}>
                  {slide.first_room.name}
                </a>
              </h3>
              <em>
                {slide.first_room.short_description}
              </em>
            </div>
          </div>
        </div>
      )
    })

    // let slide_list = [(
    //   <div className="swiper-slide" data-tag="1" key={1}>
    //     <div className="post big-post  max-h-400">
    //       <a href="/homes/cape-coral-florida-3-bedroom-3-bathroom-house/11449" className="hoverBorder" title="House in Cape Coral">
    //         <span className="hoverBorderWrapper">
    //           <img src="https://res.cloudinary.com/vacation-rentals/image/upload/c_fill,fl_lossy,h_250,q_auto:low,w_450/images/rooms/11449/1537696269_7980_.webp" className="img-fluid img-cover" alt="House in Cape Coral" title="House in Cape Coral"/>
    //           <span className="theHoverBorder"></span>
    //         </span>
    //       </a>
    //       <div className="post-details">
    //         <h3 className="m_title">
    //           <a href="/homes/cape-coral-florida-3-bedroom-3-bathroom-house/11449" title="House in Cape Coral">Beautifully furnished villa  western exposure  3 bed  3 bath  hot tub  boat fee</a>
    //         </h3>
    //         <em>3 Bedroom  House in Cape Coral Florida</em>
    //       </div>
    //     </div>
    //   </div>
    //   )]

    return (
      <div className="featured-swipe swiper-container  max-h-400 swiper-container-horizontal">
        {/* Additional required wrapper */}
        <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
            {slide_list}
        </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
      </div>
    );
  }
}

export default ListingSlideLarge;