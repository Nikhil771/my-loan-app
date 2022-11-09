import FormContent from './formContent';
import LeftBanner from '../../components/sharedComponent/leftBanner';
import LeftBannerImage from '../../assets/images/Artboard2.png';
import './signup.scss';

const SignUp = () => {
  return (
    <>
      <div className='container'>
        <div className='register d-flex'>
          <div className='row'>
            <div className='col-md-12 col-lg-4'>
              <LeftBanner backgroundImage={LeftBannerImage}>
                <div className='description flex-grow-1'>
                  <h1>
                    Enjoy the power of instant funds with <span>being</span>
                  </h1>
                </div>
              </LeftBanner>
            </div>
            <div className='col-md-12 col-lg-8'>
              <FormContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
