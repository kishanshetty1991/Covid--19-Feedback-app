//SurveyField contains logic for all fields

import React from 'react';

export default ({ input, label }) => {
	return (
    <div>
    <label>{label}</label>
    <input {...input} />
    </div>

		);
};