import React from 'react';
import PropTypes from 'prop-types';
import AdminRoutes from './AdminRoutes';
import NonAuthedRoutes from './NonAuthedRoutes';
import AuthedRoutes from './AuthedRoutes';

export default function Routes({ user }) {
  return (
    <div>
      {user?.isAdmin ? (
        <AdminRoutes user={user} />
      ) : (
        <>
          <AuthedRoutes user={user} />
          <NonAuthedRoutes user={user} />
        </>
      )}
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
Routes.defaultProps = {
  user: null,
};
