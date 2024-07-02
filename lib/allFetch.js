export async function fetchLocations(endpoint) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`https://api-locations-iota.vercel.app/api/${endpoint}`, {
        cache: "no-store",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw new Error(`Error fetching ${endpoint}`);
    }
  }
  
  export async function getRegions() {
    return fetchLocations('regions');
  }
  
  export async function getDistricts() {
    return fetchLocations('districts');
  }
  
  export async function getCounties() {
    return fetchLocations('countys');
  }
  