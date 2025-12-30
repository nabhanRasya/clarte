function ScanPage() {
  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="button logout"
    >
      Log Out
    </button>
  );
}

export default ScanPage;
