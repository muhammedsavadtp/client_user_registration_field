import { useState } from 'react';

const EditProfilePage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
            setImage(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call your change API here
        // Include logic to upload and update user profile with the new data
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Image:', image);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl mb-4">Edit Profile</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block mb-2 text-sm">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block mb-2 text-sm">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Save Changes</button>
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center items-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                            {previewImage ? (
                                <img src={previewImage} alt="User" className="h-full w-full object-cover" />
                            ) : (
                                <img src="default-user-image.jpg" alt="User" className="h-full w-full object-cover" />
                            )}
                        </div>
                        <label htmlFor="imageUpload" className="cursor-pointer text-blue-500 hover:text-blue-600">Change Image</label>
                        <input
                            type="file"
                            id="imageUpload"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfilePage;
