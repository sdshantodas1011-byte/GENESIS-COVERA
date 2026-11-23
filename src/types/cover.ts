export type CoverType = 'Lab Report' | 'Assignment' | 'Project Report';

export type DesignId =
  | 'classic-clean'
  | 'bio-helix'
  | 'tech-circuit'
  | 'ornamental-bioscience'
  | 'emerald-crest-banner'
  | 'genomic-double-strand'
  | 'swiss-minimal-grid'
  | 'sapphire-modern-card'
  | 'botanical-crimson-seal'
  | 'molecular-hexagon-lab';

export interface CoverFormData {
  // Top Course & Session
  session: string;
  courseCode: string;
  courseName: string;

  // Document Type
  coverType: CoverType;

  // Student Info (Submitted by)
  studentName: string;
  registrationNo: string;
  group: string;
  semester: string;
  studentSession: string;
  department: string;

  // Teacher Info (Submitted to)
  teacherName: string;
  teacherDesignation: string;
  teacherDepartment: string;
  universityName: string;

  // Lab Report / Project Report fields
  experimentNo: string;
  experimentName: string;
  experimentDate: string;
  reportSubmissionDate: string;

  // Assignment fields
  assignmentName: string;
  assignmentDate: string;
  assignmentSubmissionDate: string;

  // Selected Design
  designId: DesignId;
}
