import React from "react";

const ArchiveNav = ({
  dateState,
  dateSetter,
  apiState,
  apiSetter,
  formatter,
}) => {
  const handleNavForward = () => {
    apiSetter({ ...apiState, didItFetch: false });
    dateSetter({
      startDate: new Date(dateState.endDate),
      endDate: new Date(
        dateState.endDate.setMonth(dateState.endDate.getMonth() + 1)
      ),
    });
  };

  const handleNavBackward = () => {
    apiSetter({ ...apiState, didItFetch: false });
    dateSetter({
      startDate: new Date(
        dateState.startDate.setMonth(dateState.startDate.getMonth() - 1)
      ),
      endDate: new Date(
        dateState.endDate.setMonth(dateState.endDate.getMonth() - 1)
      ),
    });
  };

  return (
    <div className="archive__navigation">
      <span className="archive__navigation-arrows" onClick={handleNavBackward}>
        &#5130;
      </span>
      <span className="archive__navigation-date-range">
        {`${formatter(dateState.startDate)} - ${formatter(dateState.endDate)}`}
      </span>
      <span className="archive__navigation-arrows" onClick={handleNavForward}>
        &#5125;
      </span>
    </div>
  );
};

export default ArchiveNav;
