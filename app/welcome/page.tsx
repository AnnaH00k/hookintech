'use client'; // This ensures the component is rendered client-side

import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../../firebase'; // Adjust the path if needed
import { signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation'; // Use next/navigation for Next.js 13 and later
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const WelcomePage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [username, setUsername] = useState<string>('');
  const [profilePic, setProfilePic] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const router = useRouter(); // Initialize router

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const userDocRef = doc(firestore, `users/${user.uid}`);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUsername(userData.username || '');
          setProfilePic(userData.profilePic || '');
        }
      } else {
        router.push('/login'); // Redirect to login if no user
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleSave = async () => {
    if (user) {
      let profilePicUrl = profilePic;

      try {
        if (selectedFile) {
          const storage = getStorage();
          const storageRef = ref(storage, `profile_pics/${user.uid}`);
          await uploadBytes(storageRef, selectedFile);
          profilePicUrl = await getDownloadURL(storageRef);
        }

        const userDocRef = doc(firestore, `users/${user.uid}`);
        await setDoc(userDocRef, {
          username,
          profilePic: profilePicUrl,
        });
        setProfilePic(profilePicUrl); // Update state with new profile picture URL
        setEditMode(false);
        console.log('Profile updated successfully');
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string); // Update profile picture preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Fixed profile bubble */}
      <div className="fixed top-4 right-4 flex items-center justify-center space-x-2 shadow-black shadow-lg bg-[#303830] p-2 rounded-full">
        {profilePic ? (
          <img src={profilePic} alt="Profile" className="w-10 h-10 rounded-full" />
        ) : (
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-700">No Image</span>
          </div>
        )}
        <p className='p-2'>{username}</p>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="w-full max-w-md bg-background p-8 rounded-lg shadow-md shadow-[#5b625d]">
          <h1 className="text-2xl font-bold mb-4">Welcome, {user?.email}!</h1>

          {editMode ? (
            <div className='mb-4'>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-text">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full bg-[#303830] text-text p-2 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="profilePic" className="block text-sm font-medium text-text">Profile Picture</label>
                <input
                  type="file"
                  id="profilePic"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-1 block w-full p-2 rounded-md shadow-sm"
                />
                {profilePic && (
                  <img src={profilePic} alt="Profile Preview" className="mt-4 w-24 h-24 object-cover rounded-full" />
                )}
              </div>
              <button
                onClick={handleSave}
                className="w-full bg-green-700 text-white py-2 rounded-md"
              >
                Save
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="w-full bg-green-700 text-white py-2 rounded-md mb-4"
            >
              Edit Profile
            </button>
          )}

          <button
            onClick={handleLogout}
            className="w-full bg-red-900 text-white py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
