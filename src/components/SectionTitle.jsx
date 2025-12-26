const SectionTitle = ({ title1, title2, sectionNumber }) => {
  return (
    <div>
      <div className="relative group mb-10">
        {/* Main Content Wrapper */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end gap-6">
          {/* The Title */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.85]">
              {title1}
              <span className="text-primary italic">{title2}</span>
              <div className="mt-4 h-1.5 w-20 bg-linear-to-r from-primary via-purple-500 to-transparent rounded-full"></div>
            </h2>
          </div>

          {/* The "Meta" info */}
          <div className="md:ml-auto md:pb-2">
            <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-base-content/40">
              <span className="w-8 h-px bg-base-300"></span>
              <span>Section // 0{sectionNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
