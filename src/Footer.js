const Footer = ({ version, branding }) => {
  return (
    <div className="p-4 bg-info">
      <p>{branding}</p>
      <p>{version}</p>
    </div>
  );
};

export default Footer;
