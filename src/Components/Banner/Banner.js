import '../../Home/App.css';

function Banner() {
  return (
    <div className="banner">
      <div className='text-box'>
        <h1 className='title'>BookShare</h1>
        <h4 className='slogan'>Here you will explore all the worlds of literature.</h4>
      </div>
      <div className="image-box">
        <img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/School-Clipart/Paper_Plane_PNG_Clip_Art_Image.png?m=1469069701" alt="" />
      </div>
    </div>
  );
}

export default Banner;