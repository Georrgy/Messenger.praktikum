import React from 'react';
import Handlebars from 'handlebars';
import editProfileTemplateRaw from '../../templates/editProfile.hbs?raw';
import './EditProfile.scss';

const registerTemplate = Handlebars.compile(editProfileTemplateRaw);

const EditProfile: React.FC = () => {
    const html = registerTemplate({});
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};


export default EditProfile;
