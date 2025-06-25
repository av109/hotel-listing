import { useEffect, useState } from 'react';

import api from '@/api';
// import {
//   isListingAvailable,
//   listings as staticListings,
// } from '@/api/data/listings';
import ListingFilters from '@/components/ListingFilters';
import ListingList from '@/components/ListingList';
import { Separator, Spinner } from '@/components/ui';

const HomePage = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);
      const response = await api.get('/api/listings');
      setListings(response.data);
      setIsLoading(false);
    };

    fetchListings();
  }, []);

  const handleFilters = (filters) => {};

  const renderListingList = () => {
    if (isLoading) {
      return (
        <div className='flex justify-center'>
          <Spinner size='sm' />
        </div>
      );
    }

    return <ListingList listings={listings} />;
  };


  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters onChange={handleFilters} />
        <Separator className='my-4' />
      </div>
      {renderListingList()}
    </div>
  );
};

export default HomePage;
