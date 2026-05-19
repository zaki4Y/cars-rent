import { Formik, Form, Field } from "formik";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";

const SearchSchema = Yup.object().shape({
  pickupLocation: Yup.string().required('Required'),
  pickupDate: Yup.date().required('Required'),
  returnDate: Yup.date().required('Required')
    .min(Yup.ref('pickupDate'), 'Return date must be after pickup date'),
});

const SearchForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        pickupLocation: '',
        pickupDate: new Date(),
        returnDate: new Date(),
      }}
      validationSchema={SearchSchema}
      onSubmit={(values) => {
        const params = new URLSearchParams();
        if (values.pickupLocation) params.set('search', values.pickupLocation);
        params.set('pickupDate', values.pickupDate.toISOString().split('T')[0]);
        params.set('returnDate', values.returnDate.toISOString().split('T')[0]);
        navigate(`/cars?${params.toString()}`);
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form id="search-form" className="luxury-card rounded-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">
                Pickup Location
              </label>
              <Field
                name="pickupLocation"
                className="input-luxury rounded"
                placeholder="City, airport, or address"
              />
              {errors.pickupLocation && touched.pickupLocation && (
                <p className="text-red-400 text-xs mt-1">{errors.pickupLocation}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">
                Pickup Date
              </label>
              <DatePicker
                selected={values.pickupDate}
                onChange={date => setFieldValue('pickupDate', date)}
                className="input-luxury rounded"
                minDate={new Date()}
                dateFormat="MMMM d, yyyy"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">
                Return Date
              </label>
              <DatePicker
                selected={values.returnDate}
                onChange={date => setFieldValue('returnDate', date)}
                className="input-luxury rounded"
                minDate={values.pickupDate}
                dateFormat="MMMM d, yyyy"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="btn-primary w-full mt-6 rounded"
          >
            Search Available Cars
          </motion.button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
