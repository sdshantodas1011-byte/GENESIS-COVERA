import React from 'react';
import {CoverFormData, DesignId} from '../types/cover';
import {SustCrestSvg} from './SustCrestSvg';

interface CoverDesignProps {
  data: CoverFormData;
  designId?: DesignId;
  id?: string;
}

export const DESIGN_LIST: {id: DesignId; title: string; subtitle: string}[] = [
  {
    id: 'classic-clean',
    title: 'Design 1 · Classic Academic',
    subtitle: 'Pure white formal layout with clean rounded course box & serif heading',
  },
  {
    id: 'bio-helix',
    title: 'Design 2 · Bio Helix & Labware',
    subtitle: 'DNA double-helix header with molecular rings & laboratory flasks',
  },
  {
    id: 'tech-circuit',
    title: 'Design 3 · Tech Circuit & Microscope',
    subtitle: 'Modern slate-washed backdrop with circuit traces & microscope artwork',
  },
  {
    id: 'ornamental-bioscience',
    title: 'Design 4 · Royal Teal & Gold Plaque',
    subtitle: 'Ornamental navy-gold framed plaques with bioscience watermark accents',
  },
  {
    id: 'emerald-crest-banner',
    title: 'Design 5 · Emerald Institutional Header',
    subtitle: 'Full-width deep emerald masthead with gold trim & structured submission grid',
  },
  {
    id: 'genomic-double-strand',
    title: 'Design 6 · Genomic Ribbon Editorial',
    subtitle: 'Vertical DNA sequencing margin bar with modern editorial course layout',
  },
  {
    id: 'swiss-minimal-grid',
    title: 'Design 7 · Swiss Double-Frame Minimal',
    subtitle: 'Razor-sharp architectural monochrome grid ideal for formal black & white print',
  },
  {
    id: 'sapphire-modern-card',
    title: 'Design 8 · Sapphire Cellular Studio',
    subtitle: 'Royal sapphire accents with subtle hexagonal geometry & framed metadata',
  },
  {
    id: 'botanical-crimson-seal',
    title: 'Design 9 · Heritage Crimson & Ivory',
    subtitle: 'Warm ivory paper with burgundy-gold corner brackets & centered crest seal',
  },
  {
    id: 'molecular-hexagon-lab',
    title: 'Design 10 · Molecular Hexagon & Pipette',
    subtitle: 'Teal-indigo molecular lattice with crisp micropipette & petri artwork',
  },
];

function formatDateDisplay(iso: string): string {
  if (!iso) return '';
  const parts = iso.split('-');
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  return iso;
}

function formatDepartmentHeading(dept: string): string {
  const trimmed = dept.trim();
  if (!trimmed) return 'Department of Genetic Engineering and Biotechnology';
  if (/^department\s+of\s+/i.test(trimmed)) return trimmed;
  return `Department of ${trimmed}`;
}

export const CoverDesignSheet: React.FC<CoverDesignProps> = ({
  data,
  designId,
  id,
}) => {
  const activeDesign = designId ?? data.designId;
  const serifFont = '"Source Serif 4", "Times New Roman", "Noto Sans Bengali", Georgia, serif';
  const sansFont = '"Plus Jakarta Sans", "Noto Sans Bengali", system-ui, sans-serif';
  const deptLine = formatDepartmentHeading(data.department);
  const teacherDeptLine = formatDepartmentHeading(
    data.teacherDepartment || data.department
  );

  const renderBottomMetadata = (textColor = '#0F172A', mutedColor = '#1E293B') => {
    const isAssignment = data.coverType === 'Assignment';

    if (isAssignment) {
      return (
        <div style={{fontFamily: serifFont, fontSize: '16px', lineHeight: 1.55, color: textColor}}>
          <div>
            <span style={{fontWeight: 500}}>Assignment Name : </span>
            <span style={{fontWeight: 500}}>{data.assignmentName}</span>
          </div>
          <div style={{marginTop: '3px'}}>
            <span style={{fontWeight: 500}}>Date of Assignment : </span>
            <span style={{color: mutedColor}}>{formatDateDisplay(data.assignmentDate)}</span>
          </div>
          <div style={{marginTop: '3px'}}>
            <span style={{fontWeight: 500}}>Date of Assignment Submission : </span>
            <span style={{color: mutedColor}}>
              {formatDateDisplay(data.assignmentSubmissionDate)}
            </span>
          </div>
        </div>
      );
    }

    return (
      <div style={{fontFamily: serifFont, fontSize: '16px', lineHeight: 1.55, color: textColor}}>
        <div>
          <span style={{fontWeight: 500}}>Experiment No. : </span>
          <span style={{fontWeight: 500}}>{data.experimentNo}</span>
        </div>
        <div style={{marginTop: '3px'}}>
          <span style={{fontWeight: 500}}>Experiment Name : </span>
          <span style={{fontWeight: 500}}>{data.experimentName}</span>
        </div>
        <div style={{marginTop: '3px'}}>
          <span style={{fontWeight: 500}}>Date of the Experiment : </span>
          <span style={{color: mutedColor}}>{formatDateDisplay(data.experimentDate)}</span>
        </div>
        <div style={{marginTop: '3px'}}>
          <span style={{fontWeight: 500}}>Date of Report Submission : </span>
          <span style={{color: mutedColor}}>
            {formatDateDisplay(data.reportSubmissionDate)}
          </span>
        </div>
      </div>
    );
  };

  const renderTwoColumnPeople = (dividerColor = '#0F172A') => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.5px 1fr',
        gap: '26px',
        alignItems: 'stretch',
        fontFamily: serifFont,
        color: '#0F172A',
      }}
    >
      {/* Left: Submitted to */}
      <div style={{fontSize: '16px', lineHeight: 1.48, paddingRight: '4px'}}>
        <div style={{fontWeight: 700, fontSize: '17px', marginBottom: '8px'}}>
          Submitted to :
        </div>
        <div style={{fontWeight: 600, marginBottom: '12px'}}>{data.teacherName}</div>
        <div>{data.teacherDesignation}</div>
        <div>{teacherDeptLine}</div>
        <div>{data.universityName}</div>
      </div>

      {/* Center Vertical Rule */}
      <div style={{backgroundColor: dividerColor, width: '1.5px', minHeight: '220px'}} />

      {/* Right: Submitted by */}
      <div style={{fontSize: '16px', lineHeight: 1.52, paddingLeft: '4px'}}>
        <div style={{fontWeight: 700, fontSize: '17px', marginBottom: '8px'}}>
          Submitted by :
        </div>
        <div style={{marginBottom: '12px'}}>
          <span>Name : </span>
          <span style={{fontWeight: 600}}>{data.studentName}</span>
        </div>
        <div>Reg. No. : {data.registrationNo}</div>
        <div>Group : {data.group}</div>
        <div>Semester : {data.semester}</div>
        <div>Session : {data.studentSession || data.session}</div>
        <div>Department : {data.department}</div>
      </div>
    </div>
  );

  // =========================================================================
  // DESIGN 4: ORNAMENTAL BIOSCIENCE (Royal Teal & Gold Plaques)
  // =========================================================================
  if (activeDesign === 'ornamental-bioscience') {
    const titleUpper = data.coverType.toUpperCase();
    return (
      <div
        id={id}
        style={{
          width: '794px',
          height: '1123px',
          background: 'linear-gradient(155deg, #F6FCFC 0%, #E7F3F5 55%, #F4FBFC 100%)',
          color: '#0F172A',
          position: 'relative',
          overflow: 'hidden',
          padding: '44px 54px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Subtle Vector Bioscience Watermarks */}
        <svg
          width="794"
          height="1123"
          viewBox="0 0 794 1123"
          fill="none"
          style={{position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.14}}
        >
          {/* Top-left cell */}
          <circle cx="85" cy="95" r="56" stroke="#2D6A73" strokeWidth="2.5" />
          <circle cx="85" cy="95" r="24" fill="#6497A0" />
          <circle cx="195" cy="48" r="26" stroke="#2D6A73" strokeWidth="2" />
          <circle cx="195" cy="48" r="10" fill="#6497A0" />
          {/* Chromosome pairs */}
          <path d="M128 190 C138 205 138 220 128 235 M146 190 C136 205 136 220 146 235" stroke="#2D6A73" strokeWidth="5" strokeLinecap="round" />
          <path d="M168 200 C176 212 176 224 168 236 M182 200 C174 212 174 224 182 236" stroke="#2D6A73" strokeWidth="4" strokeLinecap="round" />
          {/* Top-right neuron */}
          <circle cx="675" cy="110" r="18" fill="#5A8F99" />
          <path d="M675 92 L660 40 M690 100 L745 65 M692 118 L752 135 M665 126 L625 180 M678 128 L705 240" stroke="#487C85" strokeWidth="2.5" strokeLinecap="round" />
          {/* Right DNA strand */}
          <path d="M740 310 C705 340 775 375 740 410 C705 445 775 480 740 515" stroke="#2D6A73" strokeWidth="3.5" fill="none" />
          <path d="M770 310 C805 340 735 375 770 410 C805 445 735 480 770 515" stroke="#5A8F99" strokeWidth="3.5" fill="none" />
          {/* Left DNA & cell */}
          <path d="M40 450 C75 485 10 520 45 555 C80 590 15 625 50 660" stroke="#2D6A73" strokeWidth="3.5" fill="none" />
          <circle cx="52" cy="835" r="54" stroke="#2D6A73" strokeWidth="2.5" />
          <circle cx="52" cy="835" r="20" fill="#6497A0" />
        </svg>

        {/* Crest & University Header */}
        <div style={{position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <SustCrestSvg size={94} variant="ornamental" />
          <div style={{fontFamily: serifFont, fontSize: '25px', fontWeight: 700, color: '#0F172A', marginTop: '10px', lineHeight: 1.2}}>
            {data.universityName}
          </div>
          <div style={{fontFamily: serifFont, fontSize: '19.5px', fontWeight: 700, color: '#0F4C5C', marginTop: '4px'}}>
            {deptLine}
          </div>
        </div>

        {/* Chamfered Dark Navy-Gold Course Plaque */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            margin: '24px auto 0 auto',
            width: '560px',
            background: '#0D2B3E',
            border: '2.5px solid #B69249',
            borderRadius: '14px',
            padding: '16px 32px',
            boxShadow: '0 8px 20px rgba(13, 43, 62, 0.16)',
            fontFamily: serifFont,
            fontSize: '17px',
            lineHeight: 1.48,
            color: '#FFFFFF',
          }}
        >
          <div>
            <span style={{fontWeight: 700}}>Session : </span>
            <span>{data.session}{data.semester ? ` (${data.semester})` : ''}</span>
          </div>
          <div>
            <span style={{fontWeight: 700, color: '#E6C67A'}}>Course Code : </span>
            <span style={{color: '#F3E3B3'}}>{data.courseCode}</span>
          </div>
          <div>
            <span style={{fontWeight: 700}}>Course Name : </span>
            <span>{data.courseName}</span>
          </div>
        </div>

        {/* Ornamental Title Heading */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            margin: '32px 0 28px 0',
          }}
        >
          <svg width="72" height="26" viewBox="0 0 72 26" fill="none">
            <line x1="2" y1="13" x2="54" y2="13" stroke="#1E3A4C" strokeWidth="2.5" />
            <path d="M58 4 C50 9 50 17 58 22" stroke="#1E3A4C" strokeWidth="2.5" fill="none" />
            <path d="M65 2 C55 8 55 18 65 24" stroke="#B69249" strokeWidth="2" fill="none" />
          </svg>
          <h1
            style={{
              fontFamily: serifFont,
              fontSize: '42px',
              fontWeight: 700,
              letterSpacing: '0.03em',
              color: '#0F172A',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {titleUpper}
          </h1>
          <svg width="72" height="26" viewBox="0 0 72 26" fill="none">
            <line x1="18" y1="13" x2="70" y2="13" stroke="#1E3A4C" strokeWidth="2.5" />
            <path d="M14 4 C22 9 22 17 14 22" stroke="#1E3A4C" strokeWidth="2.5" fill="none" />
            <path d="M7 2 C17 8 17 18 7 24" stroke="#B69249" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Side-by-Side Framed Cards */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            fontFamily: serifFont,
            color: '#0F172A',
          }}
        >
          {/* Submitted to card */}
          <div
            style={{
              border: '2px solid #0E5A64',
              outline: '2px solid #C5A059',
              outlineOffset: '3px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(212,237,240,0.65) 100%)',
              padding: '20px 22px',
              fontSize: '15.5px',
              lineHeight: 1.5,
            }}
          >
            <div style={{fontWeight: 700, fontSize: '17px', marginBottom: '6px'}}>Submitted to :</div>
            <div style={{fontWeight: 700, fontSize: '16px'}}>{data.teacherName}</div>
            <div>{data.teacherDesignation}</div>
            <div>{teacherDeptLine}</div>
            <div>{data.universityName}</div>
          </div>

          {/* Submitted by card */}
          <div
            style={{
              border: '2px solid #0E5A64',
              outline: '2px solid #C5A059',
              outlineOffset: '3px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(212,237,240,0.65) 100%)',
              padding: '20px 22px',
              fontSize: '15.5px',
              lineHeight: 1.5,
            }}
          >
            <div style={{fontWeight: 700, fontSize: '17px', marginBottom: '6px'}}>Submitted by :</div>
            <div>
              <span style={{fontWeight: 600}}>Name : </span>
              <span>{data.studentName}</span>
            </div>
            <div>
              <span style={{fontWeight: 600}}>Reg. No. : </span>
              <span>{data.registrationNo}</span>
            </div>
            <div>
              <span style={{fontWeight: 600}}>Group : </span>
              <span>{data.group}</span>
            </div>
            <div>
              <span style={{fontWeight: 600}}>Semester : </span>
              <span>{data.semester}</span>
            </div>
            <div>
              <span style={{fontWeight: 600}}>Session : </span>
              <span>{data.studentSession || data.session}</span>
            </div>
            <div>
              <span style={{fontWeight: 600}}>Department : </span>
              <span>{data.department}</span>
            </div>
          </div>
        </div>

        {/* Bottom Ornamental Dark-Teal Plaque */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            marginTop: 'auto',
            border: '2.5px solid #B69249',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #0D2E3F 0%, #164959 60%, #1F5B69 100%)',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            boxShadow: '0 8px 20px rgba(13, 43, 62, 0.18)',
          }}
        >
          <div style={{flex: 1}}>
            {renderBottomMetadata('#FFFFFF', '#E2E8F0')}
          </div>

          {/* Crisp Vector Bioscience Specimen Silhouette */}
          <svg width="118" height="86" viewBox="0 0 120 90" fill="none" style={{flexShrink: 0, opacity: 0.72}}>
            <ellipse cx="64" cy="48" rx="22" ry="11" transform="rotate(-12 64 48)" fill="#89BAC2" />
            <circle cx="38" cy="52" r="9" fill="#89BAC2" />
            <circle cx="34" cy="50" r="3.2" fill="#0D2E3F" />
            <ellipse cx="78" cy="30" rx="24" ry="8" transform="rotate(-24 78 30)" fill="rgba(165, 214, 222, 0.55)" stroke="#A5D6DE" strokeWidth="1.5" />
            <ellipse cx="82" cy="42" rx="22" ry="7" transform="rotate(-8 82 42)" fill="rgba(165, 214, 222, 0.45)" stroke="#A5D6DE" strokeWidth="1.5" />
            <path d="M44 58 L32 76 M54 58 L50 78 M66 56 L72 78 M32 45 L22 36" stroke="#89BAC2" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  }

  // =========================================================================
  // DESIGN 2: BIO HELIX & LABWARE
  // =========================================================================
  if (activeDesign === 'bio-helix') {
    const titleUpper = data.coverType.toUpperCase();

    return (
      <div
        id={id}
        style={{
          width: '794px',
          height: '1123px',
          background: 'linear-gradient(145deg, #FFFFFF 0%, #F4F9FA 60%, #EBF4F6 100%)',
          color: '#0F172A',
          position: 'relative',
          overflow: 'hidden',
          padding: '48px 56px 54px 56px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Vector Bio-Lab Background Accents */}
        <svg
          width="794"
          height="1123"
          viewBox="0 0 794 1123"
          fill="none"
          style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}
        >
          {/* Top-right DNA double helix */}
          <g opacity="0.22" transform="translate(650, -10) rotate(22)">
            <path d="M0 0 C40 35 -40 75 0 110 C40 145 -40 185 0 220" stroke="#316879" strokeWidth="7" strokeLinecap="round" />
            <path d="M44 0 C4 35 84 75 44 110 C4 145 84 185 44 220" stroke="#538D9B" strokeWidth="7" strokeLinecap="round" />
            <line x1="12" y1="22" x2="34" y2="22" stroke="#316879" strokeWidth="3.5" />
            <line x1="8" y1="55" x2="36" y2="55" stroke="#316879" strokeWidth="3.5" />
            <line x1="10" y1="92" x2="34" y2="92" stroke="#316879" strokeWidth="3.5" />
            <line x1="12" y1="130" x2="34" y2="130" stroke="#316879" strokeWidth="3.5" />
            <line x1="8" y1="165" x2="36" y2="165" stroke="#316879" strokeWidth="3.5" />
          </g>

          {/* Left margin DNA & Molecular Hexagons */}
          <g opacity="0.18" transform="translate(10, 260) rotate(-18)">
            <path d="M0 0 C38 35 -38 75 0 110 C38 145 -38 185 0 220" stroke="#316879" strokeWidth="7" strokeLinecap="round" />
            <path d="M42 0 C4 35 80 75 42 110 C4 145 80 185 42 220" stroke="#538D9B" strokeWidth="7" strokeLinecap="round" />
            <line x1="10" y1="24" x2="32" y2="24" stroke="#316879" strokeWidth="3" />
            <line x1="8" y1="58" x2="34" y2="58" stroke="#316879" strokeWidth="3" />
            <line x1="10" y1="92" x2="32" y2="92" stroke="#316879" strokeWidth="3" />
            <line x1="10" y1="130" x2="32" y2="130" stroke="#316879" strokeWidth="3" />
          </g>

          {/* Left hexagon lattice */}
          <g opacity="0.16" stroke="#316879" strokeWidth="2.5">
            <polygon points="36,630 56,618 76,630 76,654 56,666 36,654" />
            <polygon points="76,654 96,642 116,654 116,678 96,690 76,678" />
            <polygon points="36,678 56,666 76,678 76,702 56,714 36,702" />
          </g>

          {/* Right hexagon lattice */}
          <g opacity="0.16" stroke="#316879" strokeWidth="2.5">
            <polygon points="710,500 730,488 750,500 750,524 730,536 710,524" />
            <polygon points="750,524 770,512 790,524 790,548 770,560 750,548" />
            <polygon points="690,536 710,524 730,536 730,560 710,572 690,560" />
          </g>

          {/* Bottom-left DNA corner */}
          <g opacity="0.2" transform="translate(8, 880) rotate(25)">
            <path d="M0 0 C32 30 -32 65 0 95 C32 125 -32 160 0 190" stroke="#316879" strokeWidth="6" />
            <path d="M36 0 C4 30 68 65 36 95 C4 125 68 160 36 190" stroke="#538D9B" strokeWidth="6" />
          </g>

          {/* Bottom-Right Laboratory Glassware Illustration */}
          <g opacity="0.62" transform="translate(565, 920)">
            {/* Test tube */}
            <rect x="20" y="54" width="22" height="106" rx="11" fill="#E2EFF2" stroke="#3E5C6B" strokeWidth="3.2" />
            <rect x="16" y="48" width="30" height="7" rx="3" fill="#CBD5E1" stroke="#3E5C6B" strokeWidth="2.4" />
            <path d="M22 104 H40 V149 C40 154 35 158 31 158 C27 158 22 154 22 149 Z" fill="#89B4C2" />

            {/* Tall conical flask */}
            <path d="M88 30 H106 V70 L134 150 C136 156 132 160 126 160 H68 C62 160 58 156 60 150 L88 70 Z" fill="#E6F2F4" stroke="#3E5C6B" strokeWidth="3.2" strokeLinejoin="round" />
            <path d="M68 128 L61 150 C59 156 63 160 68 160 H126 C131 160 135 156 133 150 L126 128 Z" fill="#7EAEC0" />
            <rect x="84" y="24" width="26" height="7" rx="3" fill="#CBD5E1" stroke="#3E5C6B" strokeWidth="2.4" />

            {/* Wide Erlenmeyer flask */}
            <path d="M158 84 H178 V106 L204 150 C207 156 203 160 197 160 H139 C133 160 129 156 132 150 L158 106 Z" fill="#E6F2F4" stroke="#3E5C6B" strokeWidth="3.2" strokeLinejoin="round" />
            <path d="M144 130 L133 150 C130 156 134 160 139 160 H197 C202 160 206 156 203 150 L192 130 Z" fill="#5D99AB" />
            <rect x="154" y="78" width="28" height="7" rx="3" fill="#CBD5E1" stroke="#3E5C6B" strokeWidth="2.4" />

            {/* Bubbles */}
            <circle cx="168" cy="54" r="6" fill="#90BDC9" />
            <circle cx="182" cy="34" r="9" fill="#90BDC9" />
            <circle cx="158" cy="18" r="5" fill="#90BDC9" />
          </g>
        </svg>

        {/* Crest & University Name */}
        <div style={{position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <SustCrestSvg size={98} variant="classic" />
          <div style={{fontFamily: serifFont, fontSize: '25px', fontWeight: 700, color: '#0F172A', marginTop: '12px', lineHeight: 1.2}}>
            {data.universityName}
          </div>
          <div style={{fontFamily: serifFont, fontSize: '20px', fontWeight: 400, color: '#1E293B', marginTop: '4px'}}>
            {deptLine}
          </div>
        </div>

        {/* Rounded Course Box */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            margin: '26px auto 0 auto',
            minWidth: '490px',
            maxWidth: '620px',
            backgroundColor: 'rgba(241, 245, 249, 0.92)',
            border: '1.5px solid #94A3B8',
            borderRadius: '16px',
            padding: '15px 28px',
            boxShadow: '0 6px 14px rgba(15, 23, 42, 0.08)',
            fontFamily: serifFont,
            fontSize: '17px',
            lineHeight: 1.5,
            color: '#0F172A',
          }}
        >
          <div>
            <strong>Session : </strong>
            <span>{data.session}{data.semester ? ` (${data.semester})` : ''}</span>
          </div>
          <div>
            <strong>Course Code : </strong>
            <span>{data.courseCode}</span>
          </div>
          <div>
            <strong>Course Name : </strong>
            <span>{data.courseName}</span>
          </div>
        </div>

        {/* DNA-Helix Header */}
        <div style={{position: 'relative', zIndex: 1, textAlign: 'center', margin: '34px 0 34px 0'}}>
          <div style={{display: 'inline-flex', alignItems: 'center', gap: '12px', borderBottom: '4px solid #1E4E5F', paddingBottom: '6px'}}>
            {/* Crisp DNA Helix Icon */}
            <svg width="34" height="42" viewBox="0 0 38 44" fill="none">
              <path d="M6 4 C26 14 26 30 6 40" stroke="#1E4E5F" strokeWidth="4" strokeLinecap="round" />
              <path d="M32 4 C12 14 12 30 32 40" stroke="#316879" strokeWidth="4" strokeLinecap="round" />
              <line x1="10" y1="10" x2="28" y2="10" stroke="#1E4E5F" strokeWidth="2.2" />
              <line x1="13" y1="22" x2="25" y2="22" stroke="#1E4E5F" strokeWidth="2.2" />
              <line x1="10" y1="34" x2="28" y2="34" stroke="#1E4E5F" strokeWidth="2.2" />
            </svg>
            <h1
              style={{
                fontFamily: sansFont,
                fontSize: '40px',
                fontWeight: 700,
                letterSpacing: '0.03em',
                color: '#1E4352',
                margin: 0,
                lineHeight: 1,
              }}
            >
              {titleUpper}
            </h1>
          </div>
        </div>

        {/* Two-column Submitted to | Submitted by */}
        <div style={{position: 'relative', zIndex: 1, marginBottom: '40px'}}>
          {renderTwoColumnPeople('#0F172A')}
        </div>

        {/* Bottom Metadata */}
        <div style={{position: 'relative', zIndex: 1, marginTop: 'auto', maxWidth: '520px'}}>
          {renderBottomMetadata()}
        </div>
      </div>
    );
  }

  // =========================================================================
  // DESIGN 3: TECH CIRCUIT & MICROSCOPE
  // =========================================================================
  if (activeDesign === 'tech-circuit') {
    const titleUpper = data.coverType.toUpperCase();
    return (
      <div
        id={id}
        style={{
          width: '794px',
          height: '1123px',
          background: 'linear-gradient(145deg, #FFFFFF 0%, #F1F5F8 60%, #E7EEF3 100%)',
          color: '#0F172A',
          position: 'relative',
          overflow: 'hidden',
          padding: '48px 56px 54px 56px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Vector Circuit Traces & Microscope */}
        <svg
          width="794"
          height="1123"
          viewBox="0 0 794 1123"
          fill="none"
          style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}
        >
          {/* Top-left PCB traces */}
          <g stroke="#94A3B8" strokeWidth="2" opacity="0.65">
            <path d="M24 0 V95 L56 127 V220" />
            <circle cx="56" cy="224" r="4" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
            <path d="M48 0 V70 L78 100 V185" />
            <circle cx="78" cy="189" r="4" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
            <path d="M0 150 H30 L60 180 H110" />
            <circle cx="114" cy="180" r="4" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
            <path d="M98 0 V48 L125 75 V130" />
            <circle cx="125" cy="134" r="4" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
          </g>

          {/* Top-right PCB traces */}
          <g stroke="#94A3B8" strokeWidth="2" opacity="0.65">
            <path d="M770 0 V105 L736 139 V225" />
            <circle cx="736" cy="229" r="4" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
            <path d="M744 0 V75 L712 107 V180" />
            <circle cx="712" cy="184" r="4" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
            <path d="M794 140 H755 L720 175 H670" />
            <circle cx="666" cy="175" r="4" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
            <path d="M685 0 V52 L650 87 H610" />
            <circle cx="606" cy="87" r="4" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
          </g>

          {/* Bottom-right Microscope & Flask Illustration */}
          <g transform="translate(570, 880)" opacity="0.88">
            {/* Bubbles */}
            <circle cx="122" cy="40" r="10" fill="#CBD5E1" stroke="#334155" strokeWidth="2" />
            <circle cx="142" cy="20" r="6" fill="#CBD5E1" stroke="#334155" strokeWidth="2" />
            <circle cx="148" cy="48" r="5" fill="#94A3B8" />
            {/* Flask behind microscope */}
            <path d="M114 78 H134 V108 L158 175 C160 182 155 186 148 186 H100 C93 186 88 182 90 175 L114 108 Z" fill="#E2E8F0" stroke="#1E293B" strokeWidth="3" />
            <path d="M98 148 L91 175 C89 182 94 186 100 186 H148 C154 186 159 182 157 175 L150 148 Z" fill="#64748B" />
            {/* Microscope */}
            <rect x="22" y="182" width="84" height="12" rx="4" fill="#334155" />
            <path d="M72 182 V112 C72 88 54 78 44 82" stroke="#1E293B" strokeWidth="10" strokeLinecap="round" fill="none" />
            <rect x="28" y="66" width="18" height="58" rx="3" transform="rotate(-24 28 66)" fill="#475569" stroke="#0F172A" strokeWidth="2.5" />
            <rect x="22" y="54" width="14" height="14" rx="2" transform="rotate(-24 22 54)" fill="#1E293B" />
            <rect x="24" y="142" width="44" height="7" rx="2" fill="#1E293B" />
            <circle cx="68" cy="116" r="9" fill="#94A3B8" stroke="#1E293B" strokeWidth="2.5" />
          </g>
        </svg>

        {/* Header */}
        <div style={{position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <SustCrestSvg size={98} variant="classic" />
          <div style={{fontFamily: serifFont, fontSize: '25px', fontWeight: 700, color: '#0F172A', marginTop: '12px', lineHeight: 1.2}}>
            {data.universityName}
          </div>
          <div style={{fontFamily: serifFont, fontSize: '20px', fontWeight: 400, color: '#1E293B', marginTop: '4px'}}>
            {deptLine}
          </div>
        </div>

        {/* Course Box */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            margin: '26px auto 0 auto',
            minWidth: '490px',
            maxWidth: '620px',
            backgroundColor: 'rgba(241, 245, 249, 0.94)',
            border: '1.5px solid #94A3B8',
            borderRadius: '16px',
            padding: '15px 28px',
            boxShadow: '0 6px 16px rgba(15, 23, 42, 0.08)',
            fontFamily: serifFont,
            fontSize: '17px',
            lineHeight: 1.5,
            color: '#0F172A',
          }}
        >
          <div>
            <strong>Session : </strong>
            <span>{data.session}{data.semester ? ` (${data.semester})` : ''}</span>
          </div>
          <div>
            <strong>Course Code : </strong>
            <span>{data.courseCode}</span>
          </div>
          <div>
            <strong>Course Name : </strong>
            <span>{data.courseName}</span>
          </div>
        </div>

        {/* Clean Sans Heading */}
        <div style={{position: 'relative', zIndex: 1, textAlign: 'center', margin: '36px 0 36px 0'}}>
          <h1
            style={{
              fontFamily: sansFont,
              fontSize: '42px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: '#1E293B',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {titleUpper}
          </h1>
        </div>

        {/* Two Columns */}
        <div style={{position: 'relative', zIndex: 1, marginBottom: '40px'}}>
          {renderTwoColumnPeople('#0F172A')}
        </div>

        {/* Bottom Metadata */}
        <div style={{position: 'relative', zIndex: 1, marginTop: 'auto', maxWidth: '510px'}}>
          {renderBottomMetadata()}
        </div>
      </div>
    );
  }

  // =========================================================================
  // DESIGN 5: EMERALD INSTITUTIONAL HEADER
  // =========================================================================
  if (activeDesign === 'emerald-crest-banner') {
    const titleUpper = data.coverType.toUpperCase();
    return (
      <div
        id={id}
        style={{
          width: '794px',
          height: '1123px',
          backgroundColor: '#FFFFFF',
          color: '#0F172A',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Full-Width Emerald Header Band */}
        <div
          style={{
            background: 'linear-gradient(135deg, #063729 0%, #0B4F3B 65%, #11624A 100%)',
            borderBottom: '4px solid #C5A059',
            padding: '38px 54px 32px 54px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            color: '#FFFFFF',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              padding: '8px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
              flexShrink: 0,
            }}
          >
            <SustCrestSvg size={82} variant="ornamental" />
          </div>
          <div>
            <div style={{fontFamily: serifFont, fontSize: '25px', fontWeight: 700, lineHeight: 1.2, letterSpacing: '0.01em'}}>
              {data.universityName}
            </div>
            <div style={{fontFamily: serifFont, fontSize: '18.5px', color: '#D1FAE5', marginTop: '6px', fontWeight: 600}}>
              {deptLine}
            </div>
          </div>
        </div>

        {/* Main Body */}
        <div style={{flex: 1, padding: '36px 56px 50px 56px', display: 'flex', flexDirection: 'column'}}>
          {/* Course Summary Card */}
          <div
            style={{
              backgroundColor: '#F3F8F6',
              border: '1.5px solid #A7C4B8',
              borderTop: '3.5px solid #0B4F3B',
              borderRadius: '12px',
              padding: '18px 26px',
              fontFamily: serifFont,
              fontSize: '17px',
              lineHeight: 1.52,
            }}
          >
            <div>
              <strong>Session : </strong>
              <span>{data.session}{data.semester ? ` (${data.semester})` : ''}</span>
            </div>
            <div>
              <strong>Course Code : </strong>
              <span style={{color: '#0B4F3B', fontWeight: 700}}>{data.courseCode}</span>
            </div>
            <div>
              <strong>Course Name : </strong>
              <span>{data.courseName}</span>
            </div>
          </div>

          {/* Center Title Banner */}
          <div style={{textAlign: 'center', margin: '34px 0 34px 0'}}>
            <div
              style={{
                display: 'inline-block',
                borderTop: '2.5px solid #0B4F3B',
                borderBottom: '2.5px solid #0B4F3B',
                padding: '8px 34px',
                fontFamily: sansFont,
                fontSize: '36px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#063729',
              }}
            >
              {titleUpper}
            </div>
          </div>

          {/* People Columns */}
          <div style={{marginBottom: '36px'}}>
            {renderTwoColumnPeople('#0B4F3B')}
          </div>

          {/* Framed Bottom Metadata */}
          <div
            style={{
              marginTop: 'auto',
              border: '1px solid #CBD5E1',
              borderTop: '3px solid #C5A059',
              backgroundColor: '#F8FAFC',
              borderRadius: '10px',
              padding: '18px 24px',
            }}
          >
            {renderBottomMetadata('#0F172A', '#334155')}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // DESIGN 6: GENOMIC RIBBON EDITORIAL
  // =========================================================================
  if (activeDesign === 'genomic-double-strand') {
    const titleUpper = data.coverType.toUpperCase();
    return (
      <div
        id={id}
        style={{
          width: '794px',
          height: '1123px',
          backgroundColor: '#FFFFFF',
          color: '#0F172A',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
          display: 'flex',
        }}
      >
        {/* Left Vertical Genomic Sidebar */}
        <div
          style={{
            width: '54px',
            background: 'linear-gradient(180deg, #0F3D4C 0%, #0E6973 55%, #0B4F3B 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '32px 0',
            flexShrink: 0,
          }}
        >
          <svg width="28" height="440" viewBox="0 0 28 440" fill="none" style={{opacity: 0.45}}>
            <path d="M4 10 C24 45 24 85 4 120 C24 155 24 195 4 230 C24 265 24 305 4 340 C24 375 24 415 4 435" stroke="#A7F3D0" strokeWidth="2.5" />
            <path d="M24 10 C4 45 4 85 24 120 C4 155 4 195 24 230 C4 265 4 305 24 340 C4 375 4 415 24 435" stroke="#E0F2FE" strokeWidth="2.5" />
            <line x1="7" y1="30" x2="21" y2="30" stroke="#A7F3D0" strokeWidth="1.5" />
            <line x1="7" y1="65" x2="21" y2="65" stroke="#A7F3D0" strokeWidth="1.5" />
            <line x1="7" y1="140" x2="21" y2="140" stroke="#A7F3D0" strokeWidth="1.5" />
            <line x1="7" y1="175" x2="21" y2="175" stroke="#A7F3D0" strokeWidth="1.5" />
            <line x1="7" y1="250" x2="21" y2="250" stroke="#A7F3D0" strokeWidth="1.5" />
            <line x1="7" y1="285" x2="21" y2="285" stroke="#A7F3D0" strokeWidth="1.5" />
            <line x1="7" y1="360" x2="21" y2="360" stroke="#A7F3D0" strokeWidth="1.5" />
            <line x1="7" y1="395" x2="21" y2="395" stroke="#A7F3D0" strokeWidth="1.5" />
          </svg>
          <div style={{width: '10px', height: '10px', borderRadius: '999px', backgroundColor: '#34D399'}} />
        </div>

        {/* Right Editorial Content */}
        <div style={{flex: 1, padding: '48px 52px 52px 48px', display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', borderBottom: '2px solid #0F3D4C', paddingBottom: '22px'}}>
            <div>
              <div style={{fontFamily: serifFont, fontSize: '23px', fontWeight: 700, color: '#0F172A', lineHeight: 1.2}}>
                {data.universityName}
              </div>
              <div style={{fontFamily: serifFont, fontSize: '18px', color: '#0E6973', fontWeight: 600, marginTop: '6px'}}>
                {deptLine}
              </div>
            </div>
            <div style={{flexShrink: 0}}>
              <SustCrestSvg size={84} variant="classic" />
            </div>
          </div>

          {/* Left-Aligned Bold Document Type */}
          <div style={{margin: '32px 0 24px 0'}}>
            <div style={{fontFamily: sansFont, fontSize: '13px', fontWeight: 700, letterSpacing: '0.16em', color: '#0E6973', textTransform: 'uppercase', marginBottom: '6px'}}>
              {data.session}{data.semester ? ` · ${data.semester}` : ''}
            </div>
            <h1 style={{fontFamily: sansFont, fontSize: '42px', fontWeight: 700, color: '#0F172A', margin: 0, lineHeight: 1.08}}>
              {titleUpper}
            </h1>
          </div>

          {/* Tabular Course Block */}
          <div
            style={{
              borderTop: '1px solid #CBD5E1',
              borderBottom: '1px solid #CBD5E1',
              padding: '16px 0',
              marginBottom: '36px',
              fontFamily: serifFont,
              fontSize: '17px',
              lineHeight: 1.55,
            }}
          >
            <div>
              <strong>Course Name : </strong>
              <span>{data.courseName}</span>
            </div>
            <div>
              <strong>Course Code : </strong>
              <span style={{color: '#0E6973', fontWeight: 700}}>{data.courseCode}</span>
            </div>
          </div>

          <div style={{marginBottom: '34px'}}>
            {renderTwoColumnPeople('#0E6973')}
          </div>

          <div style={{marginTop: 'auto', borderTop: '2px solid #0F3D4C', paddingTop: '18px'}}>
            {renderBottomMetadata('#0F172A', '#334155')}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // DESIGN 7: SWISS DOUBLE-FRAME MINIMAL (Architectural Monochrome)
  // =========================================================================
  if (activeDesign === 'swiss-minimal-grid') {
    const titleUpper = data.coverType.toUpperCase();
    return (
      <div
        id={id}
        style={{
          width: '794px',
          height: '1123px',
          backgroundColor: '#FFFFFF',
          color: '#0F172A',
          position: 'relative',
          overflow: 'hidden',
          padding: '54px 60px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Architectural Double Outer Border */}
        <div style={{position: 'absolute', inset: '22px', border: '2px solid #0F172A', pointerEvents: 'none'}} />
        <div style={{position: 'absolute', inset: '28px', border: '1px solid #94A3B8', pointerEvents: 'none'}} />

        <div style={{position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <SustCrestSvg size={92} variant="classic" />
            <div style={{fontFamily: serifFont, fontSize: '24px', fontWeight: 700, marginTop: '12px', letterSpacing: '0.01em'}}>
              {data.universityName}
            </div>
            <div style={{fontFamily: serifFont, fontSize: '18.5px', color: '#334155', marginTop: '4px'}}>
              {deptLine}
            </div>
          </div>

          {/* Crisp Hairline Course Table */}
          <div
            style={{
              margin: '28px auto 0 auto',
              width: '100%',
              maxWidth: '580px',
              border: '1.5px solid #0F172A',
              fontFamily: serifFont,
              fontSize: '16.5px',
              lineHeight: 1.5,
            }}
          >
            <div style={{padding: '10px 18px', borderBottom: '1px solid #CBD5E1'}}>
              <strong>Session : </strong>
              <span>{data.session}{data.semester ? ` (${data.semester})` : ''}</span>
            </div>
            <div style={{padding: '10px 18px', borderBottom: '1px solid #CBD5E1'}}>
              <strong>Course Code : </strong>
              <span>{data.courseCode}</span>
            </div>
            <div style={{padding: '10px 18px'}}>
              <strong>Course Name : </strong>
              <span>{data.courseName}</span>
            </div>
          </div>

          <div style={{textAlign: 'center', margin: '34px 0 34px 0'}}>
            <h1
              style={{
                fontFamily: sansFont,
                fontSize: '38px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#0F172A',
                margin: 0,
                padding: '10px 0',
                borderTop: '2px solid #0F172A',
                borderBottom: '2px solid #0F172A',
              }}
            >
              {titleUpper}
            </h1>
          </div>

          <div style={{marginBottom: '36px'}}>
            {renderTwoColumnPeople('#0F172A')}
          </div>

          <div style={{marginTop: 'auto', borderTop: '1.5px solid #0F172A', paddingTop: '16px'}}>
            {renderBottomMetadata()}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // DESIGN 8: SAPPHIRE CELLULAR STUDIO
  // =========================================================================
  if (activeDesign === 'sapphire-modern-card') {
    const titleUpper = data.coverType.toUpperCase();
    return (
      <div
        id={id}
        style={{
          width: '794px',
          height: '1123px',
          background: 'linear-gradient(160deg, #FFFFFF 0%, #F4F8FF 58%, #EAF1FF 100%)',
          color: '#0F172A',
          position: 'relative',
          overflow: 'hidden',
          padding: '48px 56px 52px 56px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Subtle Geometric Cellular Corner Accents */}
        <svg width="794" height="1123" viewBox="0 0 794 1123" fill="none" style={{position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.14}}>
          <g stroke="#1E40AF" strokeWidth="2.5">
            <polygon points="30,40 60,22 90,40 90,74 60,92 30,74" />
            <polygon points="90,40 120,22 150,40 150,74 120,92 90,74" />
            <polygon points="60,92 90,74 120,92 120,126 90,144 60,126" />
            <polygon points="660,970 690,952 720,970 720,1004 690,1022 660,1004" />
            <polygon points="720,970 750,952 780,970 780,1004 750,1022 720,1004" />
            <polygon points="690,1022 720,1004 750,1022 750,1056 720,1074 690,1056" />
          </g>
        </svg>

        <div style={{position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <SustCrestSvg size={96} variant="classic" />
            <div style={{fontFamily: serifFont, fontSize: '25px', fontWeight: 700, color: '#0F172A', marginTop: '12px', lineHeight: 1.2}}>
              {data.universityName}
            </div>
            <div style={{fontFamily: serifFont, fontSize: '19.5px', fontWeight: 600, color: '#1E3A8A', marginTop: '4px'}}>
              {deptLine}
            </div>
          </div>

          <div
            style={{
              margin: '26px auto 0 auto',
              minWidth: '500px',
              maxWidth: '620px',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #93C5FD',
              borderRadius: '14px',
              padding: '16px 28px',
              boxShadow: '0 8px 20px rgba(30, 58, 138, 0.08)',
              fontFamily: serifFont,
              fontSize: '17px',
              lineHeight: 1.5,
            }}
          >
            <div>
              <strong>Session : </strong>
              <span>{data.session}{data.semester ? ` (${data.semester})` : ''}</span>
            </div>
            <div>
              <strong style={{color: '#1E3A8A'}}>Course Code : </strong>
              <span style={{fontWeight: 600}}>{data.courseCode}</span>
            </div>
            <div>
              <strong>Course Name : </strong>
              <span>{data.courseName}</span>
            </div>
          </div>

          <div style={{textAlign: 'center', margin: '34px 0 34px 0'}}>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#1E3A8A',
                color: '#FFFFFF',
                padding: '10px 36px',
                borderRadius: '8px',
                fontFamily: sansFont,
                fontSize: '30px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                boxShadow: '0 6px 16px rgba(30, 58, 138, 0.2)',
              }}
            >
              {titleUpper}
            </div>
          </div>

          <div style={{marginBottom: '36px'}}>
            {renderTwoColumnPeople('#1E3A8A')}
          </div>

          <div
            style={{
              marginTop: 'auto',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '12px',
              padding: '18px 24px',
            }}
          >
            {renderBottomMetadata()}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // DESIGN 9: HERITAGE CRIMSON & IVORY
  // =========================================================================
  if (activeDesign === 'botanical-crimson-seal') {
    const titleUpper = data.coverType.toUpperCase();
    return (
      <div
        id={id}
        style={{
          width: '794px',
          height: '1123px',
          backgroundColor: '#FCFBF7',
          color: '#1C1917',
          position: 'relative',
          overflow: 'hidden',
          padding: '52px 58px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Burgundy & Antique Gold Corner Brackets */}
        <div style={{position: 'absolute', inset: '24px', border: '1px solid #D6D3D1', pointerEvents: 'none'}} />
        <div style={{position: 'absolute', top: '20px', left: '20px', width: '44px', height: '44px', borderTop: '3.5px solid #7F1D1D', borderLeft: '3.5px solid #7F1D1D', pointerEvents: 'none'}} />
        <div style={{position: 'absolute', top: '20px', right: '20px', width: '44px', height: '44px', borderTop: '3.5px solid #7F1D1D', borderRight: '3.5px solid #7F1D1D', pointerEvents: 'none'}} />
        <div style={{position: 'absolute', bottom: '20px', left: '20px', width: '44px', height: '44px', borderBottom: '3.5px solid #7F1D1D', borderLeft: '3.5px solid #7F1D1D', pointerEvents: 'none'}} />
        <div style={{position: 'absolute', bottom: '20px', right: '20px', width: '44px', height: '44px', borderBottom: '3.5px solid #7F1D1D', borderRight: '3.5px solid #7F1D1D', pointerEvents: 'none'}} />

        <div style={{position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <SustCrestSvg size={98} variant="ornamental" />
            <div style={{fontFamily: serifFont, fontSize: '25px', fontWeight: 700, color: '#1C1917', marginTop: '12px', lineHeight: 1.2}}>
              {data.universityName}
            </div>
            <div style={{fontFamily: serifFont, fontSize: '19.5px', fontWeight: 600, color: '#7F1D1D', marginTop: '4px'}}>
              {deptLine}
            </div>
          </div>

          <div
            style={{
              margin: '26px auto 0 auto',
              minWidth: '500px',
              maxWidth: '620px',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #B48A3E',
              borderRadius: '10px',
              padding: '15px 28px',
              fontFamily: serifFont,
              fontSize: '17px',
              lineHeight: 1.5,
            }}
          >
            <div>
              <strong>Session : </strong>
              <span>{data.session}{data.semester ? ` (${data.semester})` : ''}</span>
            </div>
            <div>
              <strong style={{color: '#7F1D1D'}}>Course Code : </strong>
              <span style={{fontWeight: 600}}>{data.courseCode}</span>
            </div>
            <div>
              <strong>Course Name : </strong>
              <span>{data.courseName}</span>
            </div>
          </div>

          <div style={{textAlign: 'center', margin: '34px 0 34px 0'}}>
            <h1
              style={{
                display: 'inline-block',
                fontFamily: serifFont,
                fontSize: '40px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: '#7F1D1D',
                margin: 0,
                borderBottom: '2.5px solid #B48A3E',
                paddingBottom: '4px',
              }}
            >
              {titleUpper}
            </h1>
          </div>

          <div style={{marginBottom: '36px'}}>
            {renderTwoColumnPeople('#7F1D1D')}
          </div>

          <div style={{marginTop: 'auto', borderTop: '1.5px solid #B48A3E', paddingTop: '16px'}}>
            {renderBottomMetadata('#1C1917', '#44403C')}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // DESIGN 10: MOLECULAR HEXAGON & PIPETTE
  // =========================================================================
  if (activeDesign === 'molecular-hexagon-lab') {
    const titleUpper = data.coverType.toUpperCase();
    return (
      <div
        id={id}
        style={{
          width: '794px',
          height: '1123px',
          background: 'linear-gradient(155deg, #FFFFFF 0%, #F0FDFA 55%, #ECFEFF 100%)',
          color: '#0F172A',
          position: 'relative',
          overflow: 'hidden',
          padding: '48px 56px 52px 56px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Vector Molecular Lattice & Micropipette Artwork */}
        <svg width="794" height="1123" viewBox="0 0 794 1123" fill="none" style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>
          <g opacity="0.16" stroke="#0F766E" strokeWidth="2.4">
            <polygon points="690,30 722,12 754,30 754,66 722,84 690,66" />
            <polygon points="722,84 754,66 786,84 786,120 754,138 722,120" />
            <polygon points="658,84 690,66 722,84 722,120 690,138 658,120" />
            <circle cx="722" cy="48" r="10" fill="#0F766E" />
          </g>

          {/* Bottom-right Petri Dish & Micropipette */}
          <g opacity="0.62" transform="translate(575, 920)">
            {/* Petri Dish */}
            <ellipse cx="95" cy="135" rx="68" ry="20" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2.8" />
            <ellipse cx="95" cy="126" rx="68" ry="18" fill="#F0FDFA" stroke="#0F766E" strokeWidth="2.6" />
            <circle cx="72" cy="126" r="5" fill="#14B8A6" />
            <circle cx="96" cy="122" r="4" fill="#0D9488" />
            <circle cx="116" cy="130" r="6" fill="#5EEAD4" />
            {/* Micropipette */}
            <g transform="rotate(-28 115 60)">
              <rect x="108" y="10" width="14" height="68" rx="4" fill="#0F766E" />
              <rect x="111" y="78" width="8" height="32" fill="#99F6E4" stroke="#0F766E" strokeWidth="2" />
              <polygon points="112,110 118,110 116,132 114,132" fill="#CBD5E1" stroke="#0F766E" strokeWidth="1.5" />
            </g>
          </g>
        </svg>

        <div style={{position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{padding: '8px', borderRadius: '999px', border: '1.5px solid #99F6E4', backgroundColor: '#FFFFFF'}}>
              <SustCrestSvg size={88} variant="classic" />
            </div>
            <div style={{fontFamily: serifFont, fontSize: '25px', fontWeight: 700, color: '#0F172A', marginTop: '12px', lineHeight: 1.2}}>
              {data.universityName}
            </div>
            <div style={{fontFamily: serifFont, fontSize: '19.5px', fontWeight: 600, color: '#0F766E', marginTop: '4px'}}>
              {deptLine}
            </div>
          </div>

          <div
            style={{
              margin: '26px auto 0 auto',
              minWidth: '500px',
              maxWidth: '620px',
              backgroundColor: 'rgba(255,255,255,0.92)',
              border: '1.5px solid #5EEAD4',
              borderRadius: '14px',
              padding: '15px 28px',
              boxShadow: '0 6px 16px rgba(15, 118, 110, 0.08)',
              fontFamily: serifFont,
              fontSize: '17px',
              lineHeight: 1.5,
            }}
          >
            <div>
              <strong>Session : </strong>
              <span>{data.session}{data.semester ? ` (${data.semester})` : ''}</span>
            </div>
            <div>
              <strong style={{color: '#0F766E'}}>Course Code : </strong>
              <span style={{fontWeight: 600}}>{data.courseCode}</span>
            </div>
            <div>
              <strong>Course Name : </strong>
              <span>{data.courseName}</span>
            </div>
          </div>

          <div style={{textAlign: 'center', margin: '34px 0 34px 0'}}>
            <h1
              style={{
                display: 'inline-block',
                fontFamily: sansFont,
                fontSize: '38px',
                fontWeight: 700,
                letterSpacing: '0.07em',
                color: '#115E59',
                margin: 0,
                borderTop: '2.5px solid #0F766E',
                borderBottom: '2.5px solid #0F766E',
                padding: '6px 28px',
              }}
            >
              {titleUpper}
            </h1>
          </div>

          <div style={{marginBottom: '36px'}}>
            {renderTwoColumnPeople('#0F766E')}
          </div>

          <div style={{marginTop: 'auto', maxWidth: '520px'}}>
            {renderBottomMetadata()}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // DESIGN 1: CLASSIC CLEAN (Pure White Academic Standard)
  // =========================================================================
  return (
    <div
      id={id}
      style={{
        width: '794px',
        height: '1123px',
        backgroundColor: '#FFFFFF',
        color: '#0F172A',
        position: 'relative',
        overflow: 'hidden',
        padding: '48px 56px 56px 56px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Crest & Header */}
      <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <SustCrestSvg size={100} variant="classic" />
        <div style={{fontFamily: serifFont, fontSize: '25px', fontWeight: 700, color: '#0F172A', marginTop: '12px', lineHeight: 1.2}}>
          {data.universityName}
        </div>
        <div style={{fontFamily: serifFont, fontSize: '20px', fontWeight: 400, color: '#1E293B', marginTop: '4px'}}>
          {deptLine}
        </div>
      </div>

      {/* Rounded Course Box */}
      <div
        style={{
          margin: '26px auto 0 auto',
          minWidth: '490px',
          maxWidth: '620px',
          backgroundColor: '#F1F5F9',
          border: '1.5px solid #94A3B8',
          borderRadius: '16px',
          padding: '15px 28px',
          fontFamily: serifFont,
          fontSize: '17px',
          lineHeight: 1.5,
          color: '#0F172A',
        }}
      >
        <div>
          <strong>Session : </strong>
          <span>{data.session}{data.semester ? ` (${data.semester})` : ''}</span>
        </div>
        <div>
          <strong>Course Code : </strong>
          <span>{data.courseCode}</span>
        </div>
        <div>
          <strong>Course Name : </strong>
          <span>{data.courseName}</span>
        </div>
      </div>

      {/* Classic Underlined Serif Title */}
      <div style={{textAlign: 'center', margin: '34px 0 36px 0'}}>
        <h1
          style={{
            display: 'inline-block',
            fontFamily: serifFont,
            fontSize: '42px',
            fontWeight: 700,
            color: '#0F172A',
            margin: 0,
            lineHeight: 1.15,
            borderBottom: '3px solid #0F172A',
            paddingBottom: '2px',
          }}
        >
          {data.coverType}
        </h1>
      </div>

      {/* Two Columns */}
      <div style={{marginBottom: '40px'}}>
        {renderTwoColumnPeople('#0F172A')}
      </div>

      {/* Bottom Metadata */}
      <div style={{marginTop: 'auto'}}>
        {renderBottomMetadata()}
      </div>
    </div>
  );
};
