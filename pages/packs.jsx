import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PacksPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { pack } = router.query;

    if (pack === 'trial') {
        window.location.href = 'https://wa.me/447479398733';
    }
    if (pack === '1month') {
        window.location.href = 'https://buy.stripe.com/eVaaFC26pfsb0xy5kk';
    }
    if (pack === '3month') {
        window.location.href = 'https://buy.stripe.com/4gw3dah1j5RB1BCbIJ';
    }
    if (pack === '6month') {
        window.location.href = 'https://buy.stripe.com/7sIbJG5iB93Nfss8wy';
    }
    if (pack === '12month') {
        window.location.href = 'https://buy.stripe.com/3cs00YdP7a7Reoo147';
    }
  }, [router.query]);

  return null;
};

export default PacksPage;