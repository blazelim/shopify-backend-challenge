import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

import { CREATE_PRODUCT } from '../../utils/mutations';

const NewProduct = () => {
    const [nameText, setName] = useState('');
    const handleName = (event) => {
        if (event.target.value.length <= 280) {
            setName(event.target.value);
          }
    }

    const [descriptionText, setDescription] = useState('');
    const handleDescription = (event) => {
        if (event.target.value.length <= 280) {
            setDescription(event.target.value);
          }
    }

    const [quantityText, setQuantity] = useState('');
    const handleQuantity = (event) => {
        if (event.target.value.length <= 280) {
            setQuantity(event.target.value);
          }
    }
    const [priceText, setPrice] = useState('')
    const handlePrice = (event) => {
        if (event.target.value.length <= 280) {
            setPrice(event.target.value);
          }
    }

    const [createProduct, { error }] = useMutation(CREATE_PRODUCT);

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
        await createProduct({
            variables: { 
                name: nameText,
                description: descriptionText,
                quantity: quantityText,
                price: priceText 
            },
        });
        } catch (e) {
        console.error(e);
        }
    };

    return (
        <div>
        <form
            className="flex-row justify-center justify-space-between-md align-stretch"
            onSubmit={handleFormSubmit}
        >
            {/* name */}
                <textarea
                    placeholder="Enter a name"
                    value={nameText}
                    className="form-input col-12 col-md-9"
                    onChange={handleName}
                ></textarea>
            {/* Description */}
                <textarea
                    placeholder="Enter a description"
                    value={descriptionText}
                    className="form-input col-12 col-md-9"
                    onChange={handleDescription}
                ></textarea>

            {/* quantity */}
                <textarea
                    placeholder="Enter an initial quantity"
                    value={quantityText}
                    className="form-input col-12 col-md-9"
                    onChange={handleQuantity}
                ></textarea>

            {/* price */}
                <textarea
                    placeholder="Enter a price"
                    value={priceText}
                    className="form-input col-12 col-md-9"
                    onChange={handlePrice}
                ></textarea>
            <button className="btn col-12 col-md-3" type="submit">
            Submit
            </button>
        </form>
        </div>
    );
    };

export default NewProduct
