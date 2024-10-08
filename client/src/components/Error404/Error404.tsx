import React from 'react';
import Handlebars from 'handlebars';
import error404TemplateRaw from '../../templates/404.hbs?raw';

const error404Template = Handlebars.compile(error404TemplateRaw);

const Error404: React.FC = () => {
    // useEffect(() => {
    //     console.log('Template Raw:', error404TemplateRaw);
    //     console.log('Compiled HTML:', error404Template({}));
    // }, []);

    const html = error404Template({});
    return <div dangerouslySetInnerHTML={{ __html: html }} />
};

export default Error404;
