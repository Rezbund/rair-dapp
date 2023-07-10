import { useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import chainData from '../../utils/blockchainData';
import { rFetch } from '../../utils/rFetch';
import InputSelect from '../common/InputSelect';

const OfferSelector = ({ fileId }) => {
  const [contractOptions, setContractOptions] = useState([]);
  const [selectedContract, setSelectedContract] = useState('null');

  const [offerOptions, setOfferOptions] = useState([]);
  const [selectedOffers, setSelectedOffers] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const { success, result } = await rFetch(
        '/api/v2/contracts/my?itemsPerPage=all'
      );
      if (!success) {
        return;
      }
      setContractOptions(
        result.map((contract) => ({
          label: `${contract.title} (${chainData[contract.blockchain].symbol})`,
          value: contract._id
        }))
      );
    })();
  }, []);

  useEffect(() => {
    setOfferOptions([]);
    setSelectedOffers([]);
    if (selectedContract === 'null') {
      return;
    }
    (async () => {
      const { success, data } = await rFetch(
        `/api/v2/offers?contract=${selectedContract}`,
        undefined,
        undefined,
        false
      );
      if (!success) {
        return;
      }
      setOfferOptions(data.doc);
    })();
  }, [selectedContract]);

  const addOffer = useCallback(
    async (offerId: string) => {
      const copy: string[] = [...selectedOffers];
      if (copy.includes(offerId)) {
        copy.splice(copy.indexOf(offerId), 1);
      } else {
        copy.push(offerId);
      }
      setSelectedOffers(copy);
    },
    [selectedOffers]
  );

  const sendOffers = useCallback(async () => {
    const data = await rFetch(`/api/v2/files/${fileId}/unlocks`, {
      method: 'POST',
      body: JSON.stringify({
        offers: selectedOffers
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (data.success) {
      Swal.close();
    }
  }, [fileId, selectedOffers]);

  return (
    <>
      <InputSelect
        placeholder="Select contract"
        label="Contract"
        customClass="form-control mb-2"
        options={contractOptions}
        getter={selectedContract}
        setter={setSelectedContract}
      />
      {offerOptions.length > 0 && (
        <>
          Offers: <br />
          {offerOptions.map((offer: any, index) => {
            const isSelected = selectedOffers.includes(offer._id);
            return (
              <button
                className={`col-12 my-2 btn btn${
                  isSelected ? '' : '-outline'
                }-primary`}
                onClick={() => addOffer(offer._id)}
                key={index}>
                Offer {offer.offerName}
              </button>
            );
          })}{' '}
        </>
      )}
      <br />
      {selectedOffers.length > 0 && (
        <button onClick={sendOffers} className="btn float-end btn-royal-ice">
          Add Offer
        </button>
      )}
      <button
        onClick={sendOffers}
        className="float-start btn btn-outline-secondary">
        Cancel
      </button>
    </>
  );
};

export default OfferSelector;
