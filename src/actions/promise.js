import data from '../data/serviceData';

const timeout = 500;
class DataService {
    static getData() {
      console.log(data);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, timeout);
        });
    }
}

export default DataService;
