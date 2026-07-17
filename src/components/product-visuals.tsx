import {
  AppWindow,
  Bot,
  Check,
  CircleAlert,
  Database,
  FileCheck2,
  Mail,
  Network,
  ShieldCheck,
  TicketCheck,
} from "lucide-react";
import Image from "next/image";

type ProductShellProps = {
  children: React.ReactNode;
  title: string;
  meta: string;
  section: "map" | "rules" | "review";
};

function ProductShell({ children, title, meta, section }: ProductShellProps) {
  return (
    <div className="product-shell" aria-label={`${title} product preview`}>
      <div className="product-topbar">
        <div className="product-brand">
          <Image src="/brand/scopwise-logo-symbol.svg" alt="" width={264} height={188} />
          <span>Scopwise</span>
        </div>
        <span className="environment-label">Production</span>
      </div>
      <div className="product-body">
        <aside className="product-sidebar" aria-label="Product navigation preview">
          <span>Overview</span>
          <span className={section === "map" ? "active" : ""}>Agents</span>
          <span>Systems</span>
          <span className={section === "rules" ? "active" : ""}>Rules</span>
          <span className={section === "review" ? "active" : ""}>Reviews</span>
        </aside>
        <div className="product-content">
          <header className="product-content-header">
            <div>
              <h3>{title}</h3>
              <p>{meta}</p>
            </div>
            {section === "review" ? (
              <span className="status-tag status-approved">
                <Check size={13} aria-hidden="true" /> Ready for review
              </span>
            ) : null}
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}

type GraphNodeProps = {
  className: string;
  icon: React.ReactNode;
  name: string;
  state: string;
  tone: string;
};

function GraphNode({ className, icon, name, state, tone }: GraphNodeProps) {
  return (
    <div className={`graph-node ${className}`} data-tone={tone}>
      <span className="graph-node-icon">{icon}</span>
      <span>
        <strong>{name}</strong>
        <small>{state}</small>
      </span>
    </div>
  );
}

export function AccessMap({ compact = false }: { compact?: boolean }) {
  return (
    <ProductShell
      title="Access map"
      meta="18 relationships · 3 unresolved"
      section="map"
    >
      <div className={`access-graph ${compact ? "compact" : ""}`}>
        <span className="graph-route route-a" />
        <span className="graph-route route-b dashed" />
        <span className="graph-route route-c" />
        <span className="graph-route route-d dashed" />
        <GraphNode
          className="agent-node"
          icon={<Bot size={17} />}
          name="Support Copilot"
          state="Production"
          tone="lavender"
        />
        <GraphNode
          className="salesforce-node"
          icon={<Database size={17} />}
          name="Salesforce"
          state="Actual · Read"
          tone="sky"
        />
        <GraphNode
          className="sharepoint-node"
          icon={<AppWindow size={17} />}
          name="SharePoint"
          state="Inherited · Read"
          tone="butter"
        />
        <GraphNode
          className="jira-node"
          icon={<TicketCheck size={17} />}
          name="Jira"
          state="Actual · Write"
          tone="mint"
        />
        <GraphNode
          className="outlook-node"
          icon={<Mail size={17} />}
          name="Outlook"
          state="Conditional · Send"
          tone="apricot"
        />
      </div>
      <div className="graph-legend">
        <span><i className="legend-solid" /> Confirmed</span>
        <span><i className="legend-dashed" /> Inherited</span>
      </div>
    </ProductShell>
  );
}

const rules = [
  ["Read account", "Salesforce", "Allowed", "—", "allowed"],
  ["Retrieve policy", "SharePoint", "Allowed", "—", "allowed"],
  ["Draft update", "Jira", "Allowed", "—", "allowed"],
  ["Send email", "Outlook", "Conditional", "Service owner approval", "conditional"],
  ["Delete attachment", "Jira", "Blocked", "Not permitted", "blocked"],
] as const;

export function RulesTable() {
  return (
    <ProductShell
      title="Action rules"
      meta="Internal Support Copilot · Policy v4"
      section="rules"
    >
      <div className="rules-table" role="table" aria-label="Agent action rules">
        <div className="rules-row rules-head" role="row">
          <span>Action</span><span>System</span><span>Outcome</span><span>Condition</span>
        </div>
        {rules.map(([action, system, outcome, condition, state]) => (
          <div className="rules-row" role="row" key={action}>
            <strong>{action}</strong>
            <span>{system}</span>
            <span className={`rule-state ${state}`}>{outcome}</span>
            <span>{condition}</span>
          </div>
        ))}
      </div>
      <div className="rules-summary">
        <span><Check size={14} /> 3 allowed</span>
        <span><CircleAlert size={14} /> 1 conditional</span>
        <span>1 blocked</span>
      </div>
    </ProductShell>
  );
}

const reviewFields = [
  ["Change", "Outlook send permission added"],
  ["Agent", "Internal Support Copilot"],
  ["Owner", "Customer Operations AI"],
  ["Reviewer", "Security Architecture"],
  ["Decision", "Approved with condition"],
  ["Evidence", "Microsoft Graph permission snapshot"],
  ["Timestamp", "2026-07-17 14:32 CEST"],
] as const;

export function ReviewPackage({ compact = false }: { compact?: boolean }) {
  return (
    <ProductShell
      title="Review package"
      meta="Scope comparison · Example data"
      section="review"
    >
      <dl className={`review-fields ${compact ? "compact" : ""}`}>
        {reviewFields.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <div className="review-condition">
        <ShieldCheck size={16} aria-hidden="true" />
        <span><strong>Condition</strong> · Service owner approval required before send</span>
      </div>
    </ProductShell>
  );
}

export function ScopeDiff() {
  return (
    <div className="scope-diff" aria-label="Reviewed scope compared with current scope">
      <div className="scope-diff-header">
        <div>
          <span className="mini-label">Internal Support Copilot</span>
          <h3>Reviewed scope vs current scope</h3>
        </div>
        <Network size={24} aria-hidden="true" />
      </div>
      <div className="scope-diff-tabs" aria-hidden="true">
        <span data-tone="sky">Access</span>
        <span data-tone="lavender">Actions</span>
        <span data-tone="mint">Owners</span>
        <span data-tone="apricot">Evidence</span>
      </div>
      <div className="scope-comparison">
        <div>
          <span className="mini-label">Reviewed scope</span>
          <strong>Outlook · Draft only</strong>
          <small>Owner · Customer Operations</small>
        </div>
        <div className="scope-current">
          <span className="mini-label">Current scope</span>
          <strong>Outlook · Send enabled</strong>
          <small>Owner · Not assigned</small>
        </div>
      </div>
      <div className="scope-warning">
        <CircleAlert size={16} aria-hidden="true" /> Owner and decision are missing
      </div>
    </div>
  );
}

export function EvidenceTimeline() {
  const events = [
    ["09:14", "Permission snapshot captured", "Microsoft Graph", "sky"],
    ["10:02", "Rule change proposed", "Scopwise Rules", "lavender"],
    ["11:26", "Service owner requested", "Ownership workflow", "butter"],
    ["13:48", "Condition approved", "Security Architecture", "apricot"],
    ["14:32", "Review package generated", "Scopwise Review", "mint"],
  ];

  return (
    <div className="evidence-timeline">
      <span className="mini-label">Review history · Example data</span>
      <h3>Every decision keeps its source.</h3>
      <ol>
        {events.map(([time, event, source, tone]) => (
          <li key={event} data-tone={tone}>
            <span className="timeline-dot" />
            <time>{time}</time>
            <div>
              <strong>{event}</strong>
              <small>{source}</small>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ReviewArtifact() {
  return (
    <div className="review-artifact">
      <div className="review-artifact-title">
        <div>
          <span className="mini-label">Example data</span>
          <h3>Internal Support Copilot</h3>
        </div>
        <span className="status-tag status-approved">
          <FileCheck2 size={14} /> Ready for review
        </span>
      </div>
      <dl>
        <div><dt>Scope</dt><dd>4 systems · 5 actions</dd></div>
        <div><dt>Change</dt><dd>Outlook send permission</dd></div>
        <div><dt>Owner</dt><dd>Customer Operations AI</dd></div>
        <div><dt>Decision</dt><dd>Approved with condition</dd></div>
        <div><dt>Evidence</dt><dd>Graph permission snapshot</dd></div>
        <div><dt>Timestamp</dt><dd>2026-07-17 14:32 CEST</dd></div>
      </dl>
      <div className="review-artifact-footer">Condition · Service owner approval required before send</div>
    </div>
  );
}
