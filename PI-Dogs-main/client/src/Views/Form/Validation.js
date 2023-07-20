function validate(formData) {
    function isValidImageURL(url) {
        const pattern = /\.(jpeg|jpg|gif|png|svg)$/i;
        return pattern.test(url);
    }

    const errors = {};
    if (!formData.image) {
        errors.image = 'Image is required';
    }
    if (!isValidImageURL(formData.image)) {
        errors.image = 'Invalid image URL. Must contain .jpeg, .jpg, .gif, .png, or .svg';
    }

    if (!formData.name) {
        errors.name = 'Name is required';
    }

    if (!formData.weight) {
        errors.weight = 'Weight is required';
    }

    if (!formData.height) {
        errors.height = 'Height is required';
    }

    if (!formData.life_span) {
        errors.life_span = 'Life_span is required';
    }

    if (!formData.temps) {
        errors.temps = 'Temperament is required';
    }
    return errors;
}

export default validate;