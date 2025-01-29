import { Formik, Form, Field } from "formik";
import DatePicker from "react-datepicker";
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
  return (
    <Formik
      initialValues={{
        pickupLocation: '',
        pickupDate: new Date(),
        returnDate: new Date(),
      }}
      validationSchema={SearchSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="glass-card p-6 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Pickup Location
              </label>
              <Field
                name="pickupLocation"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                         text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                         focus:border-transparent transition-all duration-200"
                placeholder="Enter location"
              />
              {errors.pickupLocation && touched.pickupLocation && (
                <div className="text-red-500 text-sm mt-1">{errors.pickupLocation}</div>
              )}
            </div>

            {/* Pickup Date */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Pickup Date
              </label>
              <DatePicker
                selected={values.pickupDate}
                onChange={date => setFieldValue('pickupDate', date)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                         text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                         focus:border-transparent transition-all duration-200"
                minDate={new Date()}
              />
            </div>

            {/* Return Date */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Return Date
              </label>
              <DatePicker
                selected={values.returnDate}
                onChange={date => setFieldValue('returnDate', date)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                         text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                         focus:border-transparent transition-all duration-200"
                minDate={values.pickupDate}
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full py-3 bg-primary text-white rounded-lg font-medium
                     hover:bg-primary-dark transition-colors duration-300"
          >
            Search Available Cars
          </motion.button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
