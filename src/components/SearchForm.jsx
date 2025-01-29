import { Formik, Form, Field } from 'formik';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import "react-datepicker/dist/react-datepicker.css";

const SearchForm = () => {
  return (
    <Formik
      initialValues={{
        location: '',
        pickupDate: new Date(),
        returnDate: new Date(),
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form id="search-form" className="glass-card p-6 rounded-xl shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Location Field */}
            <div className="md:col-span-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Pick-up Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                </div>
                <Field
                  name="location"
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                           text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Enter location"
                />
              </div>
            </div>

            {/* Pick-up Date */}
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Pick-up Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                </div>
                <DatePicker
                  selected={values.pickupDate}
                  onChange={date => setFieldValue('pickupDate', date)}
                  className="block w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                           text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary 
                           focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Return Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                </div>
                <DatePicker
                  selected={values.returnDate}
                  onChange={date => setFieldValue('returnDate', date)}
                  className="block w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                           text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary 
                           focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-transparent mb-2">
                Search
              </label>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-[46px] bg-primary text-white rounded-lg font-medium
                         hover:bg-primary-dark transition-colors duration-200 flex items-center 
                         justify-center gap-2"
              >
                <FaSearch className="h-4 w-4" />
                <span>Search</span>
              </motion.button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
