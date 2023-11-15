import React, { useState,useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';




  export default function CreateProductForm () {


  const [formData, setFormData] = useState({
    name: '',
    ProductCode: '',
    HomePageRecommendation: 0,
    image: null,
    MinimumRiskControlFluctuation: '',
    MaximumRiskControlFluctuation: '',
    RandomFluctuationRange: '',
    TimePlayIntervalOne: '',
    TimePlayIntervalTwo: '',
    TimePlayIntervalThree: '',
    TimePlayIntervalFour: '',
    MinimumLimitAmountOne: '',
    MinimumLimitAmountTwo: '',
    MinimumLimitAmountThree: '',
     MinimumLimitAmountFour: '',
    ProfitAndLossRatioOne: '',
    ProfitAndLossRatioTwo: '',
    ProfitAndLossRatioThree: '',
    ProfitAndLossRatioFour: '',
    LossRatioOne: '',
    LossRatioTwo: '',
    LossRatioThree: '',
    LossRatioFour: '',
    Earnings_floating_ratio_range: '',
    Earnings_floating_under_loss: '',
    MarketOpeningTimeMonday: '',
    MarketOpeningTimeTuesday: '',
    MarketOpeningTimeWednesday: '',
    MarketOpeningTimeThursday: '',
    MarketOpeningTimeFriday: '',
    MarketOpeningTimeSaturday:'' ,
    MarketOpeningTimeSunday: '',
    
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const name = useRef(null);
  const ProductCode = useRef(null);
  const image = useRef(null);
  const MinimumRiskControlFluctuation = useRef(null);
  const MaximumRiskControlFluctuation = useRef(null);
  const RandomFluctuationRange = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);


  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? parseInt(value, 10) : value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; 
  
    if (file) {
      setFormData({
        ...formData,
        image: file,
      });

       // Create a preview URL for the selected image
        const previewURL = URL.createObjectURL(file);
        setImagePreview(previewURL);
        
    } else {
      setFormData({
        ...formData,
        image: null,
      });
      setImagePreview(null);
    }
  };
  

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.length < 3 || formData.name.length > 25) {
      newErrors.name = 'Name must be between 3 and 25 characters';

       // Set focus on the input field when the error occurs
        if (name.current) {
          name.current.focus();
        }

    }

    if (!formData.ProductCode) {
      newErrors.ProductCode = 'ProductCode is required';
      if (ProductCode.current) {
        ProductCode.current.focus();
      }

    } else if (isNaN(formData.ProductCode) || !Number.isInteger(Number(formData.ProductCode))) {
      newErrors.ProductCode = 'ProductCode must be a valid integer';
      if (ProductCode.current) {
        ProductCode.current.focus();
      }

    }


    if (!formData.MinimumRiskControlFluctuation) {

      newErrors.MinimumRiskControlFluctuation = 'Minimum Risk Control Fluctuation is required';
      if (MinimumRiskControlFluctuation.current) {
        MinimumRiskControlFluctuation.current.focus();
      }

    }

    if (!formData.MaximumRiskControlFluctuation) {

      newErrors.MaximumRiskControlFluctuation = 'Maximum Risk Control Fluctuation is required';
      if (MaximumRiskControlFluctuation.current) {
        MaximumRiskControlFluctuation.current.focus();
      }
    }

    
    if (!formData.RandomFluctuationRange) {

      newErrors.RandomFluctuationRange = 'Random Fluctuation Range is required';
      if (RandomFluctuationRange.current) {
        RandomFluctuationRange.current.focus();
      }
    }


    if (!formData.image) {
      newErrors.image = 'Image is required';
      if (image.current) {
        image.current.focus();
      }
    }



    // Add validation checks for other fields

    return newErrors;
  };

  
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  const newErrors = validateForm();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    setIsLoading(false);
    return;
  }

  setErrors({});

  const formDataToSend = new FormData();
  for (const key in formData) {
    formDataToSend.append(key, formData[key]);
  }

  try {
    const response = await axios.post(
      'https://bitapi.mfhsoltech.com/api/product/store',
      formDataToSend
    );

    if (response.status === 200) {
      toast.success('Product created successfully'); // Show success toast
      console.log('Success');
    } else {
      toast.error('Error: ' + response.data); // Show error toast
      console.log('Error:', response.data);
    }
  } catch (error) {
    toast.error('Something Went Wrong : Product already added with this product code'); // Show network error toast
    console.log('Network Error:', error);
  } finally {
    setIsLoading(false);
  }
};
  

  return (
    <div>
    
    <div className="app-content content">
    <div className="content-overlay" />
    <div className="content-wrapper">
      <div className="content-header row">
         
      </div>
      <div className="content-body">
        <section id="dashboard-analytics">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-12">
                  <div className="card widget-todo">
                    <div className="card-header border-bottom d-flex justify-content-between align-items-center flex-wrap">
                      <h4 className="card-title d-flex mb-25 mb-sm-0">
                        <i className="bx bx-check font-medium-5 pl-25 pr-75" />Add Product
                      </h4>
                    </div>
                    <div className="card-body px-0 py-1">
                       <div className='container'>
                        
                          <form onSubmit={handleSubmit}>
                          <div className='row'>
                        
                            <div className='col-md-6'>
                               <label>Name:</label>
                                <input
                                  type="text"
                                  name="name" className='form-control'
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  ref={name}
                                />
                              
                              {errors.name && <p className="error text-danger">{errors.name}</p>}
                            </div>
                             
                            <div className='col-md-6'>
                               <label>Product Code:</label>
                                <input
                                  type="number"
                                  name="ProductCode" className='form-control'
                                  value={formData.ProductCode}
                                  onChange={handleInputChange}
                                  ref={ProductCode}
                                />
                              
                              {errors.ProductCode && <p className="error text-danger">{errors.ProductCode}</p>}
                            </div>


                            <div className='col-md-6'>
                              <label>HomePageRecommendation:</label>
                              <select
                                name="HomePageRecommendation"
                                className='form-control'
                                value={formData.HomePageRecommendation}
                                onChange={handleInputChange}
                              >
                                <option selected value="1">1</option>
                                <option value="0">0</option>
                              </select>
                              {errors.HomePageRecommendation && <p className="error text-danger">{errors.HomePageRecommendation}</p>}
                            </div>


                            <div className='col-md-6'>
                              <label>Image:</label>
                              <input
                                type="file"
                                name="image"
                                className='form-control'
                                onChange={handleImageUpload}
                                ref={image}
                              />
                              {errors.image && <p className="error text-danger">{errors.image}</p>}
                              {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '100px' }} />}
                            </div>

                            
                            <div className='col-md-6'>
                               <label>Maximum Risk Control Fluctuation:</label>
                                <input
                                  type="number"
                                  name="MaximumRiskControlFluctuation" className='form-control'
                                  value={formData.MaximumRiskControlFluctuation}
                                  onChange={handleInputChange}
                                  ref={MaximumRiskControlFluctuation}
                                />
                              
                              {errors.MaximumRiskControlFluctuation && <p className="error text-danger">{errors.MaximumRiskControlFluctuation}</p>}
                            </div>


                            <div className='col-md-6'>
                               <label>Minimum Risk Control Fluctuation:</label>
                                <input
                                  type="number"
                                  name="MinimumRiskControlFluctuation" className='form-control'
                                  value={formData.MinimumRiskControlFluctuation}
                                  onChange={handleInputChange}
                                  ref={MinimumRiskControlFluctuation}
                                />
                              
                              {errors.MinimumRiskControlFluctuation && <p className="error text-danger">{errors.MinimumRiskControlFluctuation}</p>}
                            </div>



                            <div className='col-md-6'>
                               <label>Random Fluctuation Range:</label>
                                <input
                                  type="number"
                                  name="RandomFluctuationRange" className='form-control'
                                  value={formData.RandomFluctuationRange}
                                  onChange={handleInputChange}
                                  ref={RandomFluctuationRange}
                                />
                              
                              {errors.RandomFluctuationRange && <p className="error text-danger">{errors.RandomFluctuationRange}</p>}
                            </div>

                            <div className='col-md-12 mt-5'>
                               <label>TimePlay Interval One:</label>
                                <input
                                  type="number"
                                  name="TimePlayIntervalOne" className='form-control'
                                  value={formData.TimePlayIntervalOne}
                                  onChange={handleInputChange}
                                />
                              
                            </div>


                            <div className='col-md-6'>
                               <label>TimePlay Interval Two:</label>
                                <input
                                  type="number"
                                  name="TimePlayIntervalTwo" className='form-control'
                                  value={formData.TimePlayIntervalTwo}
                                  onChange={handleInputChange}
                                />
                              
                            </div>

                            <div className='col-md-6'>
                               <label>TimePlay Interval Three:</label>
                                <input
                                  type="number"
                                  name="TimePlayIntervalThree" className='form-control'
                                  value={formData.TimePlayIntervalThree}
                                  onChange={handleInputChange}
                                />
                              
                            </div>

                            <div className='col-md-6'>
                               <label>TimePlay Interval Four:</label>
                                <input
                                  type="number"
                                  name="TimePlayIntervalFour" className='form-control'
                                  value={formData.TimePlayIntervalFour}
                                  onChange={handleInputChange}
                                />
                              
                            </div>
                            


                            <div className='col-md-12 mt-5'>
                               <label>Minimum Limit Amount One:</label>
                                <input
                                  type="number"
                                  name="MinimumLimitAmountOne" className='form-control'
                                  value={formData.MinimumLimitAmountOne}
                                  onChange={handleInputChange}
                                />
                              
                            </div>


                            <div className='col-md-6'>
                               <label>Minimum Limit Amount Two:</label>
                                <input
                                  type="number"
                                  name="MinimumLimitAmountTwo" className='form-control'
                                  value={formData.MinimumLimitAmountTwo}
                                  onChange={handleInputChange}
                                />
                              
                            </div>


                            <div className='col-md-6'>
                               <label>Minimum Limit Amount Three:</label>
                                <input
                                  type="number"
                                  name="MinimumLimitAmountThree" className='form-control'
                                  value={formData.MinimumLimitAmountThree}
                                  onChange={handleInputChange}
                                />
                              
                            </div>

                            
                            <div className='col-md-6'>
                               <label>Minimum Limit Amount Four:</label>
                                <input
                                  type="number"
                                  name="MinimumLimitAmountFour" className='form-control'
                                  value={formData.MinimumLimitAmountFour}
                                  onChange={handleInputChange}
                                />
                              
                            </div>


                            <div className='col-md-12 mt-5'>
                               <label>Profit And Loss Ratio One:</label>
                                <input
                                  type="number"
                                  name="ProfitAndLossRatioOne" className='form-control'
                                  value={formData.ProfitAndLossRatioOne}
                                  onChange={handleInputChange}
                                />
                              
                            </div>
                            
                            <div className='col-md-6'>
                               <label>Profit And Loss Ratio Two:</label>
                                <input
                                  type="number"
                                  name="ProfitAndLossRatioTwo" className='form-control'
                                  value={formData.ProfitAndLossRatioTwo}
                                  onChange={handleInputChange}
                                />
                              
                            </div>
                            
                            <div className='col-md-6'>
                               <label>Profit And Loss Ratio Three:</label>
                                <input
                                  type="number"
                                  name="ProfitAndLossRatioThree" className='form-control'
                                  value={formData.ProfitAndLossRatioThree}
                                  onChange={handleInputChange}
                                />
                              
                            </div>

                            <div className='col-md-6'>
                               <label>Profit And Loss Ratio Four:</label>
                                <input
                                  type="number"
                                  name="ProfitAndLossRatioFour" className='form-control'
                                  value={formData.ProfitAndLossRatioFour}
                                  onChange={handleInputChange}
                                />
                              
                            </div>

                            <div className='col-md-12 mt-5'>
                               <label>Loss Ratio One:</label>
                                <input
                                  type="number"
                                  name="LossRatioOne" className='form-control'
                                  value={formData.LossRatioOne}
                                  onChange={handleInputChange}
                                />
                              
                            </div>



                            <div className='col-md-6'>
                               <label>Loss Ratio Two:</label>
                                <input
                                  type="number"
                                  name="LossRatioTwo" className='form-control'
                                  value={formData.LossRatioTwo}
                                  onChange={handleInputChange}
                                />
                              
                            </div>

                            <div className='col-md-6'>
                               <label>Loss Ratio Three:</label>
                                <input
                                  type="number"
                                  name="LossRatioThree" className='form-control'
                                  value={formData.LossRatioThree}
                                  onChange={handleInputChange}
                                />
                              
                            </div>

                            <div className='col-md-6'>
                               <label>LossRatioFour:</label>
                                <input
                                  type="number"
                                  name="LossRatioFour" className='form-control'
                                  value={formData.LossRatioFour}
                                  onChange={handleInputChange}
                                />
                              
                            </div>
                            

                            <div className='col-md-12 mt-5'>
                               <label>Earnings Floating Ratio Range:</label>
                                <input
                                  type="number"
                                  name="Earnings_floating_ratio_range" className='form-control'
                                  value={formData.Earnings_floating_ratio_range}
                                  onChange={handleInputChange}
                                />
                              
                            </div>
                            
                            <div className='col-md-12 mb-5'>
                               <label>Earnings Floating Under Loss:</label>
                                <input
                                  type="number"
                                  name="Earnings_floating_under_loss" className='form-control'
                                  value={formData.Earnings_floating_under_loss}
                                  onChange={handleInputChange}
                                />
                              
                            </div>


                            <div className='col-md-6'>
                               <label>Market Opening Time Monday:</label>
                                <input
                                  type="text"
                                  name="MarketOpeningTimeMonday" className='form-control'
                                  value={formData.MarketOpeningTimeMonday}
                                  onChange={handleInputChange}
                                />
                              
                            </div>


                            <div className='col-md-6'>
                               <label>Market Opening Time Tuesday:</label>
                                <input
                                  type="text"
                                  name="MarketOpeningTimeTuesday" className='form-control'
                                  value={formData.MarketOpeningTimeTuesday}
                                  onChange={handleInputChange}
                                />
                              
                            </div>

                            <div className='col-md-6'>
                               <label>Market Opening Time Thursday:</label>
                                <input
                                  type="text"
                                  name="MarketOpeningTimeThursday" className='form-control'
                                  value={formData.MarketOpeningTimeThursday}
                                  onChange={handleInputChange}
                                />
                              
                            </div>

                            <div className='col-md-6'>
                               <label>Market Opening Time Wednesday:</label>
                                <input
                                  type="text"
                                  name="MarketOpeningTimeWednesday" className='form-control'
                                  value={formData.MarketOpeningTimeWednesday}
                                  onChange={handleInputChange}
                                />
                              
                            </div>
                            
                            <div className='col-md-6'>
                               <label>Market Opening Time Friday:</label>
                                <input
                                  type="text"
                                  name="MarketOpeningTimeFriday" className='form-control'
                                  value={formData.MarketOpeningTimeFriday}
                                  onChange={handleInputChange}
                                />
                              
                            </div>

                            <div className='col-md-6'>
                               <label>Market Opening Time Saturday:</label>
                                <input
                                  type="text"
                                  name="MarketOpeningTimeSaturday" className='form-control'
                                  value={formData.MarketOpeningTimeSaturday}
                                  onChange={handleInputChange}
                                />
                              
                            </div>

                            <div className='col-md-12'>
                               <label>Market Opening Time Sunday:</label>
                                <input
                                  type="text"
                                  name="MarketOpeningTimeSunday" className='form-control'
                                  value={formData.MarketOpeningTimeSunday}
                                  onChange={handleInputChange}
                                />
                              
                              
                            </div>
                             
                            <div className="text-center ml-1">
                              <button type="submit" className="btn btn-success mt-3"> {isLoading ? 'Loading...' : 'Create Product'} </button>
                            </div>

                            </div> 
                          </form>     
                       </div>                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </section>
      </div>
    </div>
  </div>

</div>
  );
};

