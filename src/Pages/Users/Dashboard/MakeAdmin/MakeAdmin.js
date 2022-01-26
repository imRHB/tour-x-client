import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    };

    const handleMakeAdmin = e => {
        e.preventDefault();

        const user = { email };

        fetch('https://agile-tor-11686.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert('Admin added successfully');
                }
                else if (result.matchedCount) {
                    alert('User already has admin access');
                }
                else {
                    alert('No user exists in database');
                }
            });

        e.target.reset();
    };

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">

                <form onSubmit={handleMakeAdmin} class="space-y-4 text-gray-700">
                    <div class="flex flex-wrap">
                        <div class="w-full">
                            <label class="block mb-1" for="formGridCode_card">Email</label>
                            <input onBlur={handleOnBlur} class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="email" name="img" id="formGridCode_card" placeholder="Enter email address" required />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add Admin
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;