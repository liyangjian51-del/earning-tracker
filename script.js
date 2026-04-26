const STORAGE_KEYS = {
  profile: "earningsTracker.profile",
  timeOff: "earningsTracker.timeOff",
  bonuses: "earningsTracker.bonuses",
  workSessions: "earningsTracker.workSessions",
  manualAdjustments: "earningsTracker.manualAdjustments",
  trackingStart: "earningsTracker.trackingStartTimestamp",
  language: "earningsTracker.language",
  currency: "earningsTracker.currency"
};

const RUSH_BEST_KEY = "earningsTracker.rushToWorkBest";
const RUSH_MUSIC_MUTED_KEY = "earningsTracker.rushMusicMuted";
const RUSH_BGM_PATH = "assets/audio/bgm.mp3";
const RUSH_CANVAS_BASE_WIDTH = 640;
const RUSH_CANVAS_BASE_HEIGHT = 240;
const RUSH_JUMP_VELOCITY = -455;
const RUSH_GRAVITY = 1425;
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const TRANSLATIONS = {
  en: {
    appTitle: "Earnings Tracker",
    navDashboard: "Dashboard",
    navTimeOff: "Time Off",
    navBonuses: "Bonuses",
    navHistory: "History",
    navSettings: "Settings",
    localTimeNote: "Using your local system time.",
    dashboardEyebrow: "Dashboard",
    dashboardTitle: "Your earnings up to this moment.",
    dashboardSubtitle: "Live totals for today and beyond.",
    addBonusQuick: "+ Add Bonus",
    editProfile: "Edit profile",
    tabDay: "Day",
    tabWeek: "Week",
    tabMonth: "Month",
    tabYear: "Year",
    baseIncome: "Base income",
    overtimeIncome: "Overtime income",
    bonusIncome: "Bonus income",
    paidHours: "Paid hours counted",
    overtimeHours: "Overtime hours",
    range: "Range",
    today: "Today",
    shiftTitle: "Daily shift",
    shiftCopy: "Uses your saved start time automatically. Clock out when you're done.",
    startWork: "Start Work",
    pauseWork: "Pause Work",
    resumeWork: "Resume Work",
    startOvertime: "Start Overtime",
    startOvertimeNow: "Start Overtime Now",
    retroOvertime: "I already started earlier",
    retroOvertimeTitle: "When did overtime start?",
    applyOvertimeStart: "Apply Overtime Start",
    timeHour: "Hour",
    timeMinute: "Minute",
    timeMeridiem: "AM/PM",
    overtimeStartAppliedMessage: "Overtime start saved. The extra time is counted.",
    invalidOvertimeStart: "Choose an overtime start between regular shift end and your current or clock-out time.",
    endWork: "End Work",
    resetToday: "Reset today",
    beforeShift: "Before shift",
    working: "Working",
    shiftEnded: "Shift ended",
    paused: "Paused",
    overtime: "Overtime",
    clockedOut: "Clocked out",
    clockedOutMessage: "Clocked out. Nice work.",
    pausedMessage: "Paused. Earnings are resting until you resume.",
    resumedMessage: "Resumed. Back on the clock.",
    shiftEndedMessage: "Regular shift ended. Still working?",
    overtimeStartedMessage: "Overtime started. Now the extra time counts.",
    resetTodayMessage: "Today is reset. Back to the default clock.",
    adjustmentSavedMessage: "Adjustment applied. The clock is taking a supervised break.",
    adjustmentClearedMessage: "Adjustment cleared. Automatic tracking is back.",
    actionCompleted: "Action completed",
    undo: "Undo",
    confirmClockOut: "Are you sure you want to clock out? This will stop today's earnings.",
    confirmClearAll: "Clear all local data and return to first-time setup?",
    todayProgress: "Today progress",
    todayBreakdown: "Today Breakdown",
    breakdownTitle: "The receipt for today's grind",
    breakdownStart: "Start time",
    breakdownEnd: "End or current time",
    breakdownNormal: "Normal hours / earnings",
    breakdownElapsed: "Time elapsed today",
    breakdownRemaining: "Time remaining in regular shift",
    breakdownOvertime: "Overtime hours / earnings",
    breakdownBonus: "Bonus",
    breakdownTotal: "Total",
    analyticsEyebrow: "Analytics",
    analyticsMomentum: "Momentum",
    weeklyTrend: "Weekly trend",
    monthlyTrend: "Monthly trend",
    weekLabel: "Week",
    streak: "Streak",
    days: "days",
    totalWorkDays: "Work days",
    totalRegularHours: "Regular hours",
    totalOvertimeHours: "Overtime hours",
    totalEarningsLabel: "Total earnings",
    totalBonusLabel: "Total bonus",
    bonusType: "Type",
    bonusTypePerformance: "Performance",
    bonusTypeTips: "Tips",
    bonusTypeGift: "Gift",
    bonusTypeOther: "Other",
    endDaySummaryTitle: "End-of-day summary",
    regularHoursLabel: "Regular hours",
    overtimeHoursLabel: "Overtime hours",
    earnedTodayLabel: "Earned today",
    bonusTodayLabel: "Bonus today",
    finalTotalLabel: "Final total",
    optional: "Optional",
    adjustTitle: "Adjust today's worked time",
    adjustCopy: "Enter your actual worked time to get a more accurate earnings calculation. This will override automatic tracking.",
    adjustHours: "Hours",
    adjustMinutes: "Minutes",
    applyAdjustment: "Apply adjustment",
    clearAdjustment: "Clear adjustment",
    fixedManual: "Manual adjustment",
    currentTime: "Current time",
    fixedTime: "Fixed",
    notStarted: "Not started",
    noEarningsRate: "+$0.00 / sec",
    baseRateLabel: "Base",
    overtimeRateLabel: "Overtime",
    perHourUnit: "hr",
    perSecondUnit: "sec",
    invalidAdjustment: "Enter valid hours and minutes. Total worked time cannot exceed 24 hours.",
    beforeShiftEmpty: "Nothing to count yet. Your shift starts at {time}.",
    nonWorkdayEmpty: "No scheduled shift today. Enjoy the quiet math.",
    bonusEmpty: "No bonuses yet. Tiny victories can be logged anytime.",
    statusBeforeTooltip: "Your scheduled shift has not started yet.",
    statusWorkingTooltip: "Earnings are increasing right now.",
    statusPausedTooltip: "Tracking is paused. Resume to keep counting from the new time.",
    statusShiftEndedTooltip: "Regular hours are complete. Start overtime to keep earning beyond this point.",
    statusOvertimeTooltip: "Regular hours are done, so overtime pay is active.",
    statusClockedOutTooltip: "Today is closed. Reset today if that was a mistake.",
    earningsTooltip: "Live earnings use your hourly pay, current work status, bonuses, and overtime rules.",
    quickBonus: "Quick bonus",
    quickBonusTitle: "Small win, logged fast",
    amount: "Amount",
    saveBonus: "Save bonus",
    cancel: "Cancel",
    saveProfile: "Save profile",
    addTimeOff: "Add time off",
    addBonus: "Add bonus",
    refreshHistory: "Refresh history",
    updateProfile: "Update profile",
    clearDataTitle: "Clear all saved data",
    clearDataCopy: "This removes all tracker data from this browser and returns setup to a fresh start.",
    clearAllData: "Clear all data",
    timeOffEyebrow: "Time off",
    timeOffTitle: "Full-day time off records.",
    bonusesEyebrow: "Bonuses",
    bonusesTitle: "One-time bonus records.",
    historyEyebrow: "History",
    historyTitle: "Generated from your profile and saved records.",
    settingsEyebrow: "Settings",
    settingsTitle: "Profile and saved data.",
    language: "Language",
    currency: "Currency",
    hourlyWage: "Hourly wage",
    hoursPerDay: "Hours per workday",
    overtimeAfter: "Overtime starts after (hours per day)",
    overtimeMultiplier: "Overtime pay multiplier",
    startTime: "Start time",
    noProfile: "Create your profile to start tracking earnings.",
    savedSessionActive: "Counting your saved session. The day is still moving.",
    savedSessionClosed: "Your saved session is closed for today. The clock can rest.",
    dayWorking: "Your workday is in progress, so base earnings are updating live.",
    dayOvertime: "Overtime has kicked in. The meter is still running.",
    dayWorked: "Today counts as a full workday for base earnings.",
    dayOff: "Today is marked as time off, so base earnings are zero.",
    nonWorkday: "Today is not one of your saved workdays, so base earnings are zero.",
    scheduled: "Your workday has not started yet, so base earnings are zero.",
    rangeStatus: "Past eligible workdays count as full days, today is partial when you are inside working hours, and bonuses are included.",
    historyEmpty: "No history yet. Your history will start once you begin using the tracker.",
    historyRangeEmpty: "No history in this date range.",
    calculatedBasedOn: "Calculated based on:",
    explanationHourlyRate: "Hourly rate: {rate}",
    explanationWorkedTime: "Worked time: {hours}",
    explanationOvertime: "Overtime after {hours} hours at {multiplier}x",
    explanationBonus: "Bonus added separately: {bonus}",
    backupTitle: "Backup and restore",
    storageNotice: "Your data is stored locally in this browser. Export your data if you want a backup.",
    exportData: "Export Data",
    importData: "Import Data",
    exportSuccess: "Data export is ready.",
    importSuccess: "Data imported successfully.",
    importError: "Import failed. Choose a valid earnings tracker JSON backup.",
    importReadError: "Could not read that file.",
    resetTodayHelp: "Reset today clears today's work session and manual adjustment only.",
    clearAllHelp: "Clear all data removes every saved tracker record from this browser.",
    takeBreak: "Take a Break",
    breakPanelTitle: "Tiny reset station",
    closePanel: "Close",
    chooseGame: "Choose a game",
    runnerGame: "Going to Work",
    backToGames: "Back to games",
    gamePlaceholder: "Game area ready. The runner clocks in later.",
    rushToWork: "Rush to Work",
    rushStartCopy: "Jump the commute chaos. Duck the corporate signage.",
    rushGameOver: "Game over",
    rushGameOverCopy: "The commute won this round. Coffee survived? Unclear.",
    startGame: "Start Game",
    restartGame: "Restart",
    rushSpeedUp: "Speed Up!",
    rushSpawnUp: "More commute chaos",
    rushDifficultyUp: "Commute gets worse!",
    scoreLabel: "Score",
    bestLabel: "Best",
    runnerControls: "Space to jump · S to duck",
    musicOn: "Music: On",
    musicOff: "Music: Off",
    musicUnavailable: "Music unavailable"
  },
  zh: {
    appTitle: "收入追踪器",
    navDashboard: "仪表盘",
    navTimeOff: "休假",
    navBonuses: "奖金",
    navHistory: "历史",
    navSettings: "设置",
    localTimeNote: "使用你的本地系统时间。",
    dashboardEyebrow: "仪表盘",
    dashboardTitle: "此刻为止的收入",
    dashboardSubtitle: "实时查看今天和更长期的收入。",
    addBonusQuick: "+ 添加奖金",
    editProfile: "编辑资料",
    tabDay: "日",
    tabWeek: "周",
    tabMonth: "月",
    tabYear: "年",
    baseIncome: "基础收入",
    overtimeIncome: "加班收入",
    bonusIncome: "奖金收入",
    paidHours: "已计薪小时",
    overtimeHours: "加班小时",
    range: "范围",
    today: "今天",
    shiftTitle: "今日班次",
    shiftCopy: "默认使用资料中的开始时间。完成后点击下班。",
    startWork: "开始工作",
    pauseWork: "暂停工作",
    resumeWork: "继续工作",
    startOvertime: "开始加班",
    startOvertimeNow: "现在开始加班",
    retroOvertime: "我更早就开始了",
    retroOvertimeTitle: "加班从什么时候开始？",
    applyOvertimeStart: "应用加班开始时间",
    timeHour: "小时",
    timeMinute: "分钟",
    timeMeridiem: "上午/下午",
    overtimeStartAppliedMessage: "加班开始时间已保存，额外时间已计入。",
    invalidOvertimeStart: "请选择正常班次结束后、当前时间或下班时间之前的加班开始时间。",
    endWork: "结束工作",
    resetToday: "重置今天",
    beforeShift: "未开始",
    working: "工作中",
    shiftEnded: "班次已结束",
    paused: "已暂停",
    overtime: "加班中",
    clockedOut: "已下班",
    clockedOutMessage: "已下班，辛苦了。",
    pausedMessage: "已暂停。恢复后收入会继续计算。",
    resumedMessage: "已继续，重新开始计时。",
    shiftEndedMessage: "正常班次已结束。还在继续工作吗？",
    overtimeStartedMessage: "已开始加班，额外时间开始计入收入。",
    resetTodayMessage: "今天已重置，恢复默认计算。",
    adjustmentSavedMessage: "已应用调整。时钟先休息一下。",
    adjustmentClearedMessage: "已清除调整，恢复自动追踪。",
    actionCompleted: "操作已完成",
    undo: "撤销",
    confirmClockOut: "确定要下班吗？这会停止今天的收入增长。",
    confirmClearAll: "清除所有本地数据并回到首次设置状态吗？",
    todayProgress: "今日进度",
    todayBreakdown: "今日明细",
    breakdownTitle: "今天收入的小票",
    breakdownStart: "开始时间",
    breakdownEnd: "结束或当前时间",
    breakdownNormal: "正常工时 / 收入",
    breakdownElapsed: "今天已工作时间",
    breakdownRemaining: "正常班次剩余时间",
    breakdownOvertime: "加班工时 / 收入",
    breakdownBonus: "奖金",
    breakdownTotal: "总计",
    analyticsEyebrow: "分析",
    analyticsMomentum: "进度",
    weeklyTrend: "本周趋势",
    monthlyTrend: "本月趋势",
    weekLabel: "第",
    streak: "连续",
    days: "天",
    totalWorkDays: "工作天数",
    totalRegularHours: "正常工时",
    totalOvertimeHours: "加班工时",
    totalEarningsLabel: "总收入",
    totalBonusLabel: "总奖金",
    bonusType: "类型",
    bonusTypePerformance: "绩效",
    bonusTypeTips: "小费",
    bonusTypeGift: "礼物",
    bonusTypeOther: "其他",
    endDaySummaryTitle: "今日收工总结",
    regularHoursLabel: "正常工时",
    overtimeHoursLabel: "加班工时",
    earnedTodayLabel: "今日收入",
    bonusTodayLabel: "今日奖金",
    finalTotalLabel: "最终总计",
    optional: "可选",
    adjustTitle: "调整今天已工作时间",
    adjustCopy: "输入你的实际工作时长，可以让收入计算更准确。这会覆盖自动追踪。",
    adjustHours: "小时",
    adjustMinutes: "分钟",
    applyAdjustment: "应用调整",
    clearAdjustment: "清除调整",
    fixedManual: "手动调整",
    currentTime: "当前时间",
    fixedTime: "固定",
    notStarted: "未开始",
    noEarningsRate: "+¥0.00 / 秒",
    baseRateLabel: "基础",
    overtimeRateLabel: "加班",
    perHourUnit: "小时",
    perSecondUnit: "秒",
    invalidAdjustment: "请输入有效的小时和分钟。总工作时间不能超过 24 小时。",
    beforeShiftEmpty: "现在还不用计算。你的班次从 {time} 开始。",
    nonWorkdayEmpty: "今天没有排班，可以让数字安静一下。",
    bonusEmpty: "暂无奖金。小胜利随时可以记录。",
    statusBeforeTooltip: "你的计划班次还没有开始。",
    statusWorkingTooltip: "收入正在实时增加。",
    statusPausedTooltip: "追踪已暂停。继续后会从新的时间开始计算。",
    statusShiftEndedTooltip: "正常工时已完成。点击开始加班后，额外时间才会计入收入。",
    statusOvertimeTooltip: "正常工时已结束，正在按加班规则计算。",
    statusClockedOutTooltip: "今天已结束。如果点错了，可以重置今天。",
    earningsTooltip: "实时收入会根据时薪、工作状态、奖金和加班规则更新。",
    quickBonus: "快速奖金",
    quickBonusTitle: "快速记录一笔小奖励",
    amount: "金额",
    saveBonus: "保存奖金",
    cancel: "取消",
    saveProfile: "保存资料",
    addTimeOff: "添加休假",
    addBonus: "添加奖金",
    refreshHistory: "刷新历史",
    updateProfile: "更新资料",
    clearDataTitle: "清除所有保存的数据",
    clearDataCopy: "这会清除此浏览器中的所有追踪器数据，并回到全新设置状态。",
    clearAllData: "清除所有数据",
    timeOffEyebrow: "休假",
    timeOffTitle: "全天休假记录",
    bonusesEyebrow: "奖金",
    bonusesTitle: "一次性奖金记录",
    historyEyebrow: "历史",
    historyTitle: "根据资料和记录自动生成",
    settingsEyebrow: "设置",
    settingsTitle: "资料与保存的数据",
    language: "语言",
    currency: "货币",
    hourlyWage: "时薪",
    hoursPerDay: "每天工作小时数",
    overtimeAfter: "每天超过多少小时开始加班",
    overtimeMultiplier: "加班工资倍数",
    startTime: "开始时间",
    noProfile: "先创建资料，就可以开始追踪收入。",
    savedSessionActive: "正在计算已保存的工作时段。",
    savedSessionClosed: "今天的工作时段已结束。",
    dayWorking: "今天正在工作中，基础收入会实时更新。",
    dayOvertime: "已进入加班，收入仍在继续累计。",
    dayWorked: "今天按完整工作日计算基础收入。",
    dayOff: "今天已标记为休假，基础收入为 0。",
    nonWorkday: "今天不是你的工作日，基础收入为 0。",
    scheduled: "今天还没到开始时间，基础收入为 0。",
    rangeStatus: "过去的有效工作日按完整工作日计算，今天在工作时间内按实时进度计算，\n并包含奖金。",
    historyEmpty: "暂无历史。开始使用追踪器后会生成历史记录。",
    historyRangeEmpty: "这个日期范围内没有历史记录。",
    calculatedBasedOn: "计算依据：",
    explanationHourlyRate: "时薪：{rate}",
    explanationWorkedTime: "计薪工时：{hours}",
    explanationOvertime: "超过 {hours} 小时后按 {multiplier} 倍加班计算",
    explanationBonus: "奖金单独加入：{bonus}",
    backupTitle: "备份与恢复",
    storageNotice: "你的数据只保存在此浏览器本地。如需备份，请导出数据。",
    exportData: "导出数据",
    importData: "导入数据",
    exportSuccess: "数据导出已准备好。",
    importSuccess: "数据导入成功。",
    importError: "导入失败。请选择有效的收入追踪器 JSON 备份。",
    importReadError: "无法读取该文件。",
    resetTodayHelp: "重置今天只会清除今天的工作状态和手动调整。",
    clearAllHelp: "清除所有数据会删除此浏览器中的全部追踪器记录。",
    takeBreak: "开始摸鱼",
    breakPanelTitle: "小小重启站",
    closePanel: "关闭",
    chooseGame: "选择一个游戏",
    runnerGame: "出门上班",
    backToGames: "返回游戏列表",
    gamePlaceholder: "游戏区域已准备好。跑酷员工稍后上岗。",
    rushToWork: "通勤冲刺",
    rushStartCopy: "跳过通勤混乱，低头躲开职场标牌。",
    rushGameOver: "游戏结束",
    rushGameOverCopy: "这轮通勤赢了。咖啡有没有保住？不好说。",
    startGame: "开始游戏",
    restartGame: "重新开始",
    rushSpeedUp: "速度提升！",
    rushSpawnUp: "通勤更拥挤了",
    rushDifficultyUp: "通勤难度升级！",
    scoreLabel: "分数",
    bestLabel: "最佳",
    runnerControls: "空格跳跃 · S 下蹲",
    musicOn: "音乐：开",
    musicOff: "音乐：关",
    musicUnavailable: "音乐不可用"
  }
};

let profile = readStorage(STORAGE_KEYS.profile, null);
let timeOffRecords = readStorage(STORAGE_KEYS.timeOff, []);
let bonusRecords = readStorage(STORAGE_KEYS.bonuses, []);
let workSessions = readStorage(STORAGE_KEYS.workSessions, []);
let manualAdjustments = readStorage(STORAGE_KEYS.manualAdjustments, {});
let trackingStartTimestamp = readStorage(STORAGE_KEYS.trackingStart, null);
let language = readStorage(STORAGE_KEYS.language, "en");
let currency = readStorage(STORAGE_KEYS.currency, "USD");
if (!TRANSLATIONS[language]) language = "en";
if (!["USD", "RMB"].includes(currency)) currency = "USD";
let activeRange = "day";
let undoTimer = null;
let pendingUndo = null;
let displayedEarningsValue = 0;
let earningsAnimationFrame = null;
let rushGame = null;
let rushSounds = null;
let rushMusic = null;

const elements = {
  setupPanel: document.querySelector("#setupPanel"),
  appContent: document.querySelector("#appContent"),
  setupForm: document.querySelector("#setupForm"),
  setupImportData: document.querySelector("#setupImportData"),
  profileForm: document.querySelector("#profileForm"),
  languageSelect: document.querySelector("#languageSelect"),
  currencySelect: document.querySelector("#currencySelect"),
  setupError: document.querySelector("#setupError"),
  profileError: document.querySelector("#profileError"),
  profileSaved: document.querySelector("#profileSaved"),
  sidebarClock: document.querySelector("#sidebarClock"),
  totalEarnings: document.querySelector("#totalEarnings"),
  rangeLabel: document.querySelector("#rangeLabel"),
  workStatus: document.querySelector("#workStatus"),
  earningsPerSecond: document.querySelector("#earningsPerSecond"),
  rateBreakdown: document.querySelector("#rateBreakdown"),
  dashboardEmptyHint: document.querySelector("#dashboardEmptyHint"),
  endDaySummary: document.querySelector("#endDaySummary"),
  shiftMessage: document.querySelector("#shiftMessage"),
  dashboardStatus: document.querySelector("#dashboardStatus"),
  baseIncome: document.querySelector("#baseIncome"),
  overtimeIncome: document.querySelector("#overtimeIncome"),
  bonusIncome: document.querySelector("#bonusIncome"),
  hoursCounted: document.querySelector("#hoursCounted"),
  overtimeHours: document.querySelector("#overtimeHours"),
  dateRange: document.querySelector("#dateRange"),
  timeOffForm: document.querySelector("#timeOffForm"),
  timeOffDate: document.querySelector("#timeOffDate"),
  timeOffNote: document.querySelector("#timeOffNote"),
  timeOffError: document.querySelector("#timeOffError"),
  timeOffTable: document.querySelector("#timeOffTable"),
  bonusForm: document.querySelector("#bonusForm"),
  bonusDate: document.querySelector("#bonusDate"),
  bonusAmount: document.querySelector("#bonusAmount"),
  bonusType: document.querySelector("#bonusType"),
  bonusNote: document.querySelector("#bonusNote"),
  bonusError: document.querySelector("#bonusError"),
  bonusTable: document.querySelector("#bonusTable"),
  dayControls: document.querySelector("#dayControls"),
  startWorkButton: document.querySelector("#startWorkButton"),
  pauseWorkButton: document.querySelector("#pauseWorkButton"),
  resumeWorkButton: document.querySelector("#resumeWorkButton"),
  startOvertimeButton: document.querySelector("#startOvertimeButton"),
  retroOvertimeButton: document.querySelector("#retroOvertimeButton"),
  retroOvertimeForm: document.querySelector("#retroOvertimeForm"),
  retroOvertimeHour: document.querySelector("#retroOvertimeHour"),
  retroOvertimeMinute: document.querySelector("#retroOvertimeMinute"),
  retroOvertimeMeridiem: document.querySelector("#retroOvertimeMeridiem"),
  retroOvertimeError: document.querySelector("#retroOvertimeError"),
  cancelRetroOvertime: document.querySelector("#cancelRetroOvertime"),
  endWorkButton: document.querySelector("#endWorkButton"),
  resetTodayButton: document.querySelector("#resetTodayButton"),
  undoToast: document.querySelector("#undoToast"),
  undoMessage: document.querySelector("#undoMessage"),
  undoButton: document.querySelector("#undoButton"),
  todayProgressPercent: document.querySelector("#todayProgressPercent"),
  todayProgressFill: document.querySelector("#todayProgressFill"),
  breakdownStart: document.querySelector("#breakdownStart"),
  breakdownEnd: document.querySelector("#breakdownEnd"),
  breakdownNormal: document.querySelector("#breakdownNormal"),
  breakdownElapsed: document.querySelector("#breakdownElapsed"),
  breakdownRemaining: document.querySelector("#breakdownRemaining"),
  breakdownOvertime: document.querySelector("#breakdownOvertime"),
  breakdownBonus: document.querySelector("#breakdownBonus"),
  breakdownTotal: document.querySelector("#breakdownTotal"),
  calculationExplanation: document.querySelector("#calculationExplanation"),
  rangeAnalytics: document.querySelector("#rangeAnalytics"),
  analyticsTitle: document.querySelector("#analyticsTitle"),
  streakCount: document.querySelector("#streakCount"),
  analyticsSummaryCards: document.querySelector("#analyticsSummaryCards"),
  trendPanel: document.querySelector("#trendPanel"),
  trendTitle: document.querySelector("#trendTitle"),
  trendRows: document.querySelector("#trendRows"),
  manualAdjustmentForm: document.querySelector("#manualAdjustmentForm"),
  adjustHours: document.querySelector("#adjustHours"),
  adjustMinutes: document.querySelector("#adjustMinutes"),
  clearAdjustmentButton: document.querySelector("#clearAdjustmentButton"),
  adjustmentError: document.querySelector("#adjustmentError"),
  openBreakPanel: document.querySelector("#openBreakPanel"),
  breakPanel: document.querySelector("#breakPanel"),
  closeBreakPanel: document.querySelector("#closeBreakPanel"),
  breakMenu: document.querySelector("#breakMenu"),
  runnerGameButton: document.querySelector("#runnerGameButton"),
  gameContainer: document.querySelector("#gameContainer"),
  runnerCanvas: document.querySelector("#runnerCanvas"),
  runnerScore: document.querySelector("#runnerScore"),
  runnerBest: document.querySelector("#runnerBest"),
  runnerOverlay: document.querySelector("#runnerOverlay"),
  runnerOverlayTitle: document.querySelector("#runnerOverlayTitle"),
  runnerOverlayCopy: document.querySelector("#runnerOverlayCopy"),
  runnerStartButton: document.querySelector("#runnerStartButton"),
  runnerMusicToggle: document.querySelector("#runnerMusicToggle"),
  backToGames: document.querySelector("#backToGames"),
  openQuickBonus: document.querySelector("#openQuickBonus"),
  quickBonusForm: document.querySelector("#quickBonusForm"),
  quickBonusAmount: document.querySelector("#quickBonusAmount"),
  quickBonusType: document.querySelector("#quickBonusType"),
  quickBonusError: document.querySelector("#quickBonusError"),
  cancelQuickBonus: document.querySelector("#cancelQuickBonus"),
  historyEmptyState: document.querySelector("#historyEmptyState"),
  historyStartDate: document.querySelector("#historyStartDate"),
  historyEndDate: document.querySelector("#historyEndDate"),
  refreshHistory: document.querySelector("#refreshHistory"),
  dailyHistoryTable: document.querySelector("#dailyHistoryTable"),
  weeklyHistoryTable: document.querySelector("#weeklyHistoryTable"),
  monthlyHistoryTable: document.querySelector("#monthlyHistoryTable"),
  yearlyHistoryTable: document.querySelector("#yearlyHistoryTable"),
  exportData: document.querySelector("#exportData"),
  importData: document.querySelector("#importData"),
  importDataFile: document.querySelector("#importDataFile"),
  backupMessage: document.querySelector("#backupMessage"),
  clearData: document.querySelector("#clearData")
};

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  setDefaultDates();
  normalizeState();
  wireNavigation();
  wireForms();
  ensureTrackingStartForExistingProfile();
  applyPreferencesToControls();
  applyLanguage();

  if (profile) {
    showApp();
    fillProfileForms();
  } else {
    showSetup();
    prefillFirstSetup();
  }

  renderEverything();
  setInterval(() => {
    renderLiveDashboard();
    renderDashboardControls();
  }, 1000);
}

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (error) {
    console.warn(`Could not read ${key}`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function setDefaultDates() {
  const today = formatDateKey(new Date());
  elements.timeOffDate.value = today;
  elements.bonusDate.value = today;
  elements.bonusType.value = "Performance";
  elements.quickBonusType.value = "Performance";
}

function wireNavigation() {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => showSection(button.dataset.section));
  });

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => showSection(button.dataset.jump));
  });

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveRange(button.dataset.range);
      renderLiveDashboard();
      renderDashboardControls();
    });
  });
}

function setActiveRange(range) {
  activeRange = range;
  document.querySelectorAll(".tab-button").forEach((tab) => {
    const isActive = tab.dataset.range === range;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function wireForms() {
  elements.setupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = collectProfile("setup");

    if (!result.ok) {
      elements.setupError.textContent = result.message;
      return;
    }

    profile = result.profile;
    saveTrackingStartIfNeeded();
    writeStorage(STORAGE_KEYS.profile, profile);
    elements.setupError.textContent = "";
    showApp();
    fillProfileForms();
    renderEverything();
  });

  elements.profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = collectProfile("profile");

    if (!result.ok) {
      elements.profileError.textContent = result.message;
      elements.profileSaved.textContent = "";
      return;
    }

    profile = result.profile;
    writeStorage(STORAGE_KEYS.profile, profile);
    elements.profileError.textContent = "";
    elements.profileSaved.textContent = "Profile updated.";
    setTimeout(() => {
      elements.profileSaved.textContent = "";
    }, 2500);
    renderEverything();
  });

  elements.timeOffForm.addEventListener("submit", addTimeOffRecord);
  elements.bonusForm.addEventListener("submit", addBonusRecord);
  elements.languageSelect.addEventListener("change", updateLanguagePreference);
  elements.currencySelect.addEventListener("change", updateCurrencyPreference);
  elements.startWorkButton.addEventListener("click", startManualWork);
  elements.pauseWorkButton.addEventListener("click", pauseWork);
  elements.resumeWorkButton.addEventListener("click", resumeWork);
  elements.startOvertimeButton.addEventListener("click", startOvertime);
  elements.retroOvertimeButton.addEventListener("click", showRetroOvertimeForm);
  elements.retroOvertimeForm.addEventListener("submit", applyRetroOvertimeStart);
  elements.cancelRetroOvertime.addEventListener("click", hideRetroOvertimeForm);
  elements.retroOvertimeHour.addEventListener("blur", () => padTimeInput(elements.retroOvertimeHour));
  elements.retroOvertimeMinute.addEventListener("blur", () => padTimeInput(elements.retroOvertimeMinute));
  elements.endWorkButton.addEventListener("click", endManualWork);
  elements.resetTodayButton.addEventListener("click", resetTodayState);
  elements.undoButton.addEventListener("click", undoLastAction);
  elements.manualAdjustmentForm.addEventListener("submit", applyManualAdjustment);
  elements.clearAdjustmentButton.addEventListener("click", clearManualAdjustment);
  elements.openBreakPanel.addEventListener("click", openBreakPanel);
  elements.closeBreakPanel.addEventListener("click", closeBreakPanel);
  elements.runnerGameButton.addEventListener("click", showRunnerGameContainer);
  elements.backToGames.addEventListener("click", showBreakMenu);
  elements.runnerStartButton.addEventListener("click", startRushGame);
  elements.runnerMusicToggle.addEventListener("click", toggleRushMusic);
  document.addEventListener("keydown", handleRushGameKeyDown);
  document.addEventListener("keyup", handleRushGameKeyUp);
  elements.openQuickBonus.addEventListener("click", openQuickBonusForm);
  elements.cancelQuickBonus.addEventListener("click", closeQuickBonusForm);
  elements.quickBonusForm.addEventListener("submit", addQuickBonusRecord);
  elements.refreshHistory.addEventListener("click", renderHistory);
  elements.historyStartDate.addEventListener("change", renderHistory);
  elements.historyEndDate.addEventListener("change", renderHistory);
  elements.exportData.addEventListener("click", exportAppData);
  elements.importData.addEventListener("click", () => elements.importDataFile.click());
  elements.setupImportData.addEventListener("click", () => elements.importDataFile.click());
  window.addEventListener("resize", handleRushCanvasResize);
  elements.importDataFile.addEventListener("change", importAppData);

  elements.clearData.addEventListener("click", () => {
    const confirmed = window.confirm(t("confirmClearAll"));

    if (!confirmed) return;

    clearAllLocalData();
  });
}

function applyPreferencesToControls() {
  elements.languageSelect.value = language;
  elements.currencySelect.value = currency;
}

function updateLanguagePreference() {
  language = elements.languageSelect.value;
  writeStorage(STORAGE_KEYS.language, language);
  applyLanguage();
  renderEverything();
}

function updateCurrencyPreference() {
  currency = elements.currencySelect.value;
  writeStorage(STORAGE_KEYS.currency, currency);
  renderEverything();
}

function applyLanguage() {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  elements.resetTodayButton.title = t("resetTodayHelp");
  elements.clearData.title = t("clearAllHelp");
  if (rushGame && rushGame.state !== "running") {
    showRushOverlay(rushGame.state === "gameOver" ? "gameOver" : "idle");
  }
  updateRushMusicButton();
}

function t(key, replacements = {}) {
  const dictionary = TRANSLATIONS[language] || TRANSLATIONS.en;
  const fallback = TRANSLATIONS.en[key] || key;
  let text = dictionary[key] || fallback;

  Object.entries(replacements).forEach(([name, value]) => {
    text = text.replaceAll(`{${name}}`, value);
  });

  return text;
}

function showSetup() {
  elements.setupPanel.classList.remove("hidden");
  elements.appContent.classList.add("hidden");
}

function showApp() {
  elements.setupPanel.classList.add("hidden");
  elements.appContent.classList.remove("hidden");
  showSection("dashboard");
}

function showSection(sectionId) {
  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.toggle("active", section.id === sectionId);
  });

  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.section === sectionId);
  });

  if (sectionId === "history") renderHistory();
}

function prefillFirstSetup() {
  document.querySelector("#setupHours").value = "8";
  document.querySelector("#setupOvertimeAfter").value = "8";
  document.querySelector("#setupOvertimeMultiplier").value = "1.5";
  document.querySelector("#setupStart").value = "09:00";
  document.querySelectorAll("[name='setupWorkday']").forEach((checkbox) => {
    checkbox.checked = ["1", "2", "3", "4", "5"].includes(checkbox.value);
  });
}

function fillProfileForms() {
  if (!profile) return;
  fillProfileForm("setup");
  fillProfileForm("profile");
}

function fillProfileForm(prefix) {
  document.querySelector(`#${prefix}Wage`).value = profile.hourlyWage;
  document.querySelector(`#${prefix}Hours`).value = profile.hoursPerDay;
  document.querySelector(`#${prefix}OvertimeAfter`).value = getOvertimeThreshold();
  document.querySelector(`#${prefix}OvertimeMultiplier`).value = getOvertimeMultiplier();
  document.querySelector(`#${prefix}Start`).value = profile.startTime;
  document.querySelectorAll(`[name='${prefix}Workday']`).forEach((checkbox) => {
    checkbox.checked = profile.workdays.includes(Number(checkbox.value));
  });
}

function collectProfile(prefix) {
  const hourlyWage = Number(document.querySelector(`#${prefix}Wage`).value);
  const hoursPerDay = Number(document.querySelector(`#${prefix}Hours`).value);
  const overtimeAfter = Number(document.querySelector(`#${prefix}OvertimeAfter`).value);
  const overtimeMultiplier = Number(document.querySelector(`#${prefix}OvertimeMultiplier`).value);
  const startTime = document.querySelector(`#${prefix}Start`).value;
  const workdays = Array.from(document.querySelectorAll(`[name='${prefix}Workday']:checked`))
    .map((checkbox) => Number(checkbox.value))
    .sort((a, b) => a - b);

  if (!Number.isFinite(hourlyWage) || hourlyWage <= 0) {
    return { ok: false, message: "Enter an hourly wage greater than 0." };
  }

  if (!Number.isFinite(hoursPerDay) || hoursPerDay <= 0 || hoursPerDay > 24) {
    return { ok: false, message: "Enter workday hours between 0.25 and 24." };
  }

  if (!Number.isFinite(overtimeAfter) || overtimeAfter < 0 || overtimeAfter > 24) {
    return { ok: false, message: "Enter overtime start hours between 0 and 24." };
  }

  if (!Number.isFinite(overtimeMultiplier) || overtimeMultiplier < 1) {
    return { ok: false, message: "Enter an overtime multiplier of 1 or higher." };
  }

  if (!startTime) {
    return { ok: false, message: "Choose a work start time." };
  }

  if (workdays.length === 0) {
    return { ok: false, message: "Choose at least one workday." };
  }

  return {
    ok: true,
    profile: {
      hourlyWage: roundMoney(hourlyWage),
      hoursPerDay,
      overtimeAfter,
      overtimeMultiplier,
      startTime,
      workdays,
      updatedAt: new Date().toISOString()
    }
  };
}

function addTimeOffRecord(event) {
  event.preventDefault();
  const date = elements.timeOffDate.value;
  const note = elements.timeOffNote.value.trim();

  if (!date) {
    elements.timeOffError.textContent = "Choose a time off date.";
    return;
  }

  if (timeOffRecords.some((record) => record.date === date)) {
    elements.timeOffError.textContent = "That date is already saved as time off.";
    return;
  }

  timeOffRecords.push({
    id: makeId(),
    date,
    note
  });
  timeOffRecords.sort((a, b) => a.date.localeCompare(b.date));
  writeStorage(STORAGE_KEYS.timeOff, timeOffRecords);

  elements.timeOffForm.reset();
  elements.timeOffDate.value = formatDateKey(new Date());
  elements.timeOffError.textContent = "";
  renderEverything();
}

function addBonusRecord(event) {
  event.preventDefault();
  const date = elements.bonusDate.value;
  const amount = Number(elements.bonusAmount.value);
  const type = normalizeBonusType(elements.bonusType.value);
  const note = elements.bonusNote.value.trim();

  if (!date) {
    elements.bonusError.textContent = "Choose a bonus date.";
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    elements.bonusError.textContent = "Enter a bonus amount greater than 0.";
    return;
  }

  saveBonusRecord({
    date,
    amount,
    type,
    note
  }, { undoable: true });

  elements.bonusForm.reset();
  elements.bonusDate.value = formatDateKey(new Date());
  elements.bonusType.value = "Performance";
  elements.bonusError.textContent = "";
  renderEverything();
}

function addQuickBonusRecord(event) {
  event.preventDefault();
  const amount = Number(elements.quickBonusAmount.value);

  if (!Number.isFinite(amount) || amount <= 0) {
    elements.quickBonusError.textContent = "Enter a bonus amount greater than 0.";
    return;
  }

  saveBonusRecord({
    date: formatDateKey(new Date()),
    amount,
    type: normalizeBonusType(elements.quickBonusType.value),
    note: ""
  }, { undoable: true });

  closeQuickBonusForm();
  renderEverything();
}

function saveBonusRecord({ date, amount, type, note }, options = {}) {
  const record = {
    id: makeId(),
    date,
    amount: roundMoney(amount),
    type: normalizeBonusType(type),
    note: note || ""
  };

  bonusRecords.push(record);
  bonusRecords.sort((a, b) => a.date.localeCompare(b.date));
  writeStorage(STORAGE_KEYS.bonuses, bonusRecords);

  if (options.undoable) {
    showUndo(() => {
      bonusRecords = bonusRecords.filter((bonus) => bonus.id !== record.id);
      writeStorage(STORAGE_KEYS.bonuses, bonusRecords);
      renderEverything();
    });
  }

  return record;
}

function openQuickBonusForm() {
  elements.quickBonusForm.classList.remove("hidden");
  elements.quickBonusAmount.focus();
}

function closeQuickBonusForm() {
  elements.quickBonusForm.classList.add("hidden");
  elements.quickBonusForm.reset();
  elements.quickBonusType.value = "Performance";
  elements.quickBonusError.textContent = "";
}

function startManualWork() {
  if (!profile) return;

  const now = new Date();
  const todayKey = formatDateKey(now);
  if (getManualAdjustmentForDate(todayKey)) return;

  elements.endDaySummary.classList.add("hidden");
  const todaySession = getWorkSessionForDate(todayKey);

  if (getOpenManualSegment(todaySession) || isSessionEnded(todaySession)) return;
  if (!todaySession && hasAutomaticRegularShiftEnded(now, todayKey)) return;

  const session = ensureWorkSession(todayKey);
  session.endedAt = "";
  session.overtimeApproved = false;
  session.segments.push({
    id: makeId(),
    startTimestamp: now.toISOString(),
    endTimestamp: null
  });

  persistWorkSessions();
  elements.shiftMessage.textContent = "";
  renderEverything();
}

function pauseWork() {
  if (!profile) return;

  const previousSessions = cloneData(workSessions);
  const now = new Date();
  const todayKey = formatDateKey(now);
  if (getManualAdjustmentForDate(todayKey)) return;

  let session = getWorkSessionForDate(todayKey);
  if (isSessionEnded(session)) return;

  let openSegment = getOpenManualSegment(session);

  if (!openSegment) {
    const automaticStart = getAutomaticShiftStart(now);
    const shouldCaptureAutomatic = automaticStart && now > automaticStart && isScheduledWorkday(now) && !isTimeOffDate(todayKey);

    if (!shouldCaptureAutomatic) return;

    session = ensureWorkSession(todayKey);
    session.segments.push({
      id: makeId(),
      startTimestamp: automaticStart.toISOString(),
      endTimestamp: null
    });
    openSegment = getOpenManualSegment(session);
  }

  openSegment.endTimestamp = now.toISOString();
  session.endedAt = "";
  session.overtimeApproved = Boolean(session.overtimeApproved);
  persistWorkSessions();
  elements.shiftMessage.textContent = t("pausedMessage");
  showUndo(() => {
    workSessions = previousSessions;
    writeStorage(STORAGE_KEYS.workSessions, workSessions);
    elements.shiftMessage.textContent = "";
    renderEverything();
  });
  renderEverything();
}

function resumeWork() {
  if (!profile) return;

  const previousSessions = cloneData(workSessions);
  const todayKey = formatDateKey(new Date());
  if (getManualAdjustmentForDate(todayKey)) return;

  const session = getWorkSessionForDate(todayKey);

  if (!isSessionPaused(session)) return;
  if (!session.overtimeApproved && getManualWorkedHoursForDate(todayKey, new Date(), null, { ignoreOvertimeCap: true }) >= getRegularHoursLimit()) return;

  session.segments.push({
    id: makeId(),
    startTimestamp: new Date().toISOString(),
    endTimestamp: null
  });
  session.endedAt = "";
  session.overtimeApproved = Boolean(session.overtimeApproved);
  persistWorkSessions();
  elements.shiftMessage.textContent = t("resumedMessage");
  showUndo(() => {
    workSessions = previousSessions;
    writeStorage(STORAGE_KEYS.workSessions, workSessions);
    elements.shiftMessage.textContent = "";
    renderEverything();
  });
  renderEverything();
}

function startOvertime() {
  if (!profile) return;

  const previousSessions = cloneData(workSessions);
  const now = new Date();
  const todayKey = formatDateKey(now);
  if (getManualAdjustmentForDate(todayKey)) return;

  let session = getWorkSessionForDate(todayKey);
  if (isSessionEnded(session) || (session && session.overtimeApproved)) return;

  if (!canConfirmOvertime(todayKey, now, session)) return;

  confirmOvertimeStart(todayKey, now);
  hideRetroOvertimeForm();
  elements.shiftMessage.textContent = t("overtimeStartedMessage");
  showUndo(() => {
    workSessions = previousSessions;
    writeStorage(STORAGE_KEYS.workSessions, workSessions);
    elements.shiftMessage.textContent = "";
    renderEverything();
  });
  renderEverything();
}

function showRetroOvertimeForm() {
  if (!profile) return;

  const now = new Date();
  const todayKey = formatDateKey(now);
  const session = getWorkSessionForDate(todayKey);

  if (!canShowRetroOvertimeOption(todayKey, now, session)) return;

  const regularEnd = getAutomaticRegularShiftEnd(now) || now;
  setRetroOvertimeInputs(regularEnd);
  elements.retroOvertimeForm.classList.remove("hidden");
  elements.retroOvertimeError.textContent = "";
  elements.retroOvertimeHour.focus();
}

function hideRetroOvertimeForm() {
  elements.retroOvertimeForm.classList.add("hidden");
  elements.retroOvertimeError.textContent = "";
}

function applyRetroOvertimeStart(event) {
  event.preventDefault();
  if (!profile) return;

  const previousSessions = cloneData(workSessions);
  const now = new Date();
  const todayKey = formatDateKey(now);
  if (getManualAdjustmentForDate(todayKey)) return;

  const session = getWorkSessionForDate(todayKey);
  if (!canShowRetroOvertimeOption(todayKey, now, session)) return;

  const overtimeStart = parseRetroOvertimeInput(now);
  const validation = validateOvertimeStart(overtimeStart, todayKey, now, session);

  if (!validation.ok) {
    elements.retroOvertimeError.textContent = t("invalidOvertimeStart");
    return;
  }

  confirmOvertimeStart(todayKey, validation.start, validation.segmentEnd);
  hideRetroOvertimeForm();
  elements.shiftMessage.textContent = t("overtimeStartAppliedMessage");
  showUndo(() => {
    workSessions = previousSessions;
    writeStorage(STORAGE_KEYS.workSessions, workSessions);
    elements.shiftMessage.textContent = "";
    renderEverything();
  });
  renderEverything();
}

function canConfirmOvertime(todayKey, now, session) {
  return !isSessionEnded(session) && canShowRetroOvertimeOption(todayKey, now, session);
}

function canShowRetroOvertimeOption(todayKey, now, session) {
  if (getManualAdjustmentForDate(todayKey)) return false;
  if (session && session.overtimeApproved) return false;

  const regularLimit = getRegularHoursLimit();
  const rawSessionHours = getManualWorkedHoursForDate(todayKey, now, null, { ignoreOvertimeCap: true });
  const hasSessionEndedAfterRegularLimit = isSessionEnded(session) && rawSessionHours >= regularLimit;
  const hasActiveSessionReachedRegularLimit = session && rawSessionHours >= regularLimit;
  const hasSessionAtScheduledEnd = session && hasAutomaticRegularShiftEnded(now, todayKey) && rawSessionHours > 0;
  const automaticShiftEnded = !session && hasAutomaticRegularShiftEnded(now, todayKey);

  return hasSessionEndedAfterRegularLimit || hasActiveSessionReachedRegularLimit || hasSessionAtScheduledEnd || automaticShiftEnded;
}

function confirmOvertimeStart(todayKey, overtimeStart, overtimeEnd = null) {
  const now = new Date();
  const regularLimit = getRegularHoursLimit();
  const session = ensureWorkSession(todayKey);
  const wasEndedAt = session.endedAt || "";

  trimSessionToScheduledRegularEnd(session, todayKey);

  if (!session.segments.length) {
    const shiftDate = parseDateKey(todayKey);
    const start = getAutomaticShiftStart(shiftDate) || now;
    const end = new Date(start.getTime() + regularLimit * 60 * 60 * 1000);

    session.segments.push({
      id: makeId(),
      startTimestamp: start.toISOString(),
      endTimestamp: end.toISOString()
    });
  }

  session.overtimeApproved = true;
  session.endedAt = wasEndedAt && overtimeEnd ? wasEndedAt : "";
  session.segments.push({
    id: makeId(),
    startTimestamp: overtimeStart.toISOString(),
    endTimestamp: overtimeEnd ? overtimeEnd.toISOString() : null
  });
  persistWorkSessions();
}

function parseRetroOvertimeInput(referenceDate) {
  const hour = Number(elements.retroOvertimeHour.value);
  const minute = Number(elements.retroOvertimeMinute.value);
  const meridiem = elements.retroOvertimeMeridiem.value;

  if (!Number.isInteger(hour) || !Number.isInteger(minute) || hour < 1 || hour > 12 || minute < 0 || minute > 59) {
    return null;
  }

  let hour24 = hour % 12;
  if (meridiem === "PM") hour24 += 12;

  return new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate(), hour24, minute, 0, 0);
}

function validateOvertimeStart(overtimeStart, todayKey, now, session) {
  const regularEnd = getAutomaticRegularShiftEnd(now);
  const endedAt = isSessionEnded(session) && session.endedAt ? new Date(session.endedAt) : null;
  const endLimit = endedAt && !Number.isNaN(endedAt.getTime()) ? endedAt : now;

  if (!overtimeStart || Number.isNaN(overtimeStart.getTime()) || !regularEnd) return { ok: false };
  if (formatDateKey(overtimeStart) !== todayKey) return { ok: false };
  if (overtimeStart < regularEnd) return { ok: false };
  if (overtimeStart > endLimit) return { ok: false };

  return {
    ok: true,
    start: overtimeStart,
    endLimit,
    segmentEnd: endedAt && overtimeStart <= endedAt ? endedAt : null
  };
}

function setRetroOvertimeInputs(date) {
  const hours24 = date.getHours();
  const meridiem = hours24 >= 12 ? "PM" : "AM";
  const hour12 = hours24 % 12 || 12;

  elements.retroOvertimeHour.value = String(hour12).padStart(2, "0");
  elements.retroOvertimeMinute.value = String(date.getMinutes()).padStart(2, "0");
  elements.retroOvertimeMeridiem.value = meridiem;
}

function padTimeInput(input) {
  if (input.value === "") return;

  const value = Number(input.value);

  if (Number.isFinite(value)) {
    input.value = String(value).padStart(2, "0");
  }
}

function endManualWork() {
  if (!profile) return;

  if (getManualAdjustmentForDate(formatDateKey(new Date()))) return;

  if (!window.confirm(t("confirmClockOut"))) return;

  const previousSessions = cloneData(workSessions);
  const now = new Date();
  const todayKey = formatDateKey(now);
  const todaySession = ensureWorkSession(todayKey);
  let openSegment = getOpenManualSegment(todaySession);

  if (openSegment) {
    const scheduledEnd = getAutomaticRegularShiftEnd(now);
    const completionTime = todaySession.overtimeApproved
      ? null
      : scheduledEnd || getRegularCompletionTimeForSession(todaySession, todayKey, now);
    const effectiveEnd = completionTime && completionTime < now ? completionTime : now;
    openSegment.endTimestamp = effectiveEnd.toISOString();
  } else if (!todaySession.segments.length) {
    const automaticStart = getAutomaticShiftStart(now);
    const regularLimit = getRegularHoursLimit();
    const regularEnd = automaticStart ? new Date(automaticStart.getTime() + regularLimit * 60 * 60 * 1000) : now;
    const start = automaticStart && now > automaticStart ? automaticStart : now;
    const end = automaticStart && now > regularEnd ? regularEnd : now;

    todaySession.segments.push({
      id: makeId(),
      startTimestamp: start.toISOString(),
      endTimestamp: end.toISOString()
    });
  }

  todaySession.overtimeApproved = Boolean(todaySession.overtimeApproved);
  todaySession.endedAt = now.toISOString();
  persistWorkSessions();
  elements.shiftMessage.textContent = t("clockedOutMessage");
  renderEndDaySummary(todayKey, now);
  showUndo(() => {
    workSessions = previousSessions;
    writeStorage(STORAGE_KEYS.workSessions, workSessions);
    elements.shiftMessage.textContent = "";
    elements.endDaySummary.classList.add("hidden");
    renderEverything();
  });
  triggerCelebration();
  renderEverything();
}

function resetTodayState() {
  if (!profile) return;

  const todayKey = formatDateKey(new Date());
  const previousSessions = cloneData(workSessions);
  const previousAdjustments = cloneData(manualAdjustments);
  const legacyBefore = readStorage("earningsTracker.hoursOverrides", null);

  elements.endDaySummary.classList.add("hidden");
  workSessions = workSessions.filter((session) => session.date !== todayKey);
  writeStorage(STORAGE_KEYS.workSessions, workSessions);
  delete manualAdjustments[todayKey];
  persistManualAdjustments();
  clearLegacyTodayOverride(todayKey);
  elements.adjustHours.value = "";
  elements.adjustMinutes.value = "";
  elements.adjustmentError.textContent = "";
  hideRetroOvertimeForm();

  elements.shiftMessage.textContent = t("resetTodayMessage");
  showUndo(() => {
    workSessions = previousSessions;
    manualAdjustments = previousAdjustments;
    writeStorage(STORAGE_KEYS.workSessions, workSessions);
    persistManualAdjustments();
    restoreLegacyOverrideState(legacyBefore);
    elements.shiftMessage.textContent = "";
    renderEverything();
  });
  renderEverything();
}

function applyManualAdjustment(event) {
  event.preventDefault();
  if (!profile) return;

  const hours = Number(elements.adjustHours.value || 0);
  const minutes = Number(elements.adjustMinutes.value || 0);
  const totalHours = hours + minutes / 60;

  if (
    !Number.isInteger(hours) ||
    !Number.isInteger(minutes) ||
    hours < 0 ||
    minutes < 0 ||
    minutes > 59 ||
    totalHours > 24
  ) {
    elements.adjustmentError.textContent = t("invalidAdjustment");
    return;
  }

  const todayKey = formatDateKey(new Date());
  const previousAdjustments = cloneData(manualAdjustments);
  const previousSessions = cloneData(workSessions);
  workSessions = workSessions.filter((session) => session.date !== todayKey);
  writeStorage(STORAGE_KEYS.workSessions, workSessions);
  manualAdjustments[todayKey] = {
    hours,
    minutes,
    totalHours: roundHours(totalHours),
    savedAt: new Date().toISOString()
  };
  persistManualAdjustments();

  elements.adjustmentError.textContent = "";
  hideRetroOvertimeForm();
  elements.shiftMessage.textContent = t("adjustmentSavedMessage");
  showUndo(() => {
    manualAdjustments = previousAdjustments;
    workSessions = previousSessions;
    writeStorage(STORAGE_KEYS.workSessions, workSessions);
    persistManualAdjustments();
    elements.shiftMessage.textContent = "";
    renderEverything();
  });
  renderEverything();
}

function clearManualAdjustment() {
  if (!profile) return;

  const todayKey = formatDateKey(new Date());
  const previousAdjustments = cloneData(manualAdjustments);
  delete manualAdjustments[todayKey];
  persistManualAdjustments();
  elements.adjustHours.value = "";
  elements.adjustMinutes.value = "";
  elements.adjustmentError.textContent = "";
  elements.shiftMessage.textContent = t("adjustmentClearedMessage");
  showUndo(() => {
    manualAdjustments = previousAdjustments;
    persistManualAdjustments();
    elements.shiftMessage.textContent = "";
    renderEverything();
  });
  renderEverything();
}

function openBreakPanel() {
  elements.breakPanel.classList.remove("hidden");
  document.body.classList.add("break-panel-open");
  showBreakMenu();
}

function closeBreakPanel() {
  stopRushGameForPanel();
  pauseRushMusic();
  elements.breakPanel.classList.add("hidden");
  document.body.classList.remove("break-panel-open");
}

function showRunnerGameContainer() {
  elements.breakMenu.classList.add("hidden");
  elements.gameContainer.classList.remove("hidden");
  initRushGame();
  window.requestAnimationFrame(() => {
    resizeRushCanvas();
    drawRushGame();
    elements.runnerCanvas.focus();
  });
}

function showBreakMenu() {
  stopRushGameForPanel();
  pauseRushMusic();
  elements.gameContainer.classList.add("hidden");
  elements.breakMenu.classList.remove("hidden");
}

function stopRushGameForPanel() {
  if (!rushGame || rushGame.state !== "running") {
    pauseRushMusic();
    return;
  }

  cancelRushAnimation();
  pauseRushMusic();
  rushGame.state = "idle";
  drawRushGame();
  showRushOverlay("idle");
}

function handleRushCanvasResize() {
  if (!rushGame) return;

  resizeRushCanvas();
  drawRushGame();
}

function resizeRushCanvas() {
  if (!rushGame) return;

  const canvas = rushGame.canvas;
  const cssWidth = Math.max(280, Math.round(canvas.clientWidth || canvas.parentElement?.clientWidth || RUSH_CANVAS_BASE_WIDTH));
  const cssHeight = Math.round(cssWidth * (RUSH_CANVAS_BASE_HEIGHT / RUSH_CANVAS_BASE_WIDTH));
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const scaledWidth = Math.round(cssWidth * pixelRatio);
  const scaledHeight = Math.round(cssHeight * pixelRatio);

  if (canvas.width !== scaledWidth || canvas.height !== scaledHeight) {
    canvas.width = scaledWidth;
    canvas.height = scaledHeight;
  }

  rushGame.width = RUSH_CANVAS_BASE_WIDTH;
  rushGame.height = RUSH_CANVAS_BASE_HEIGHT;
  rushGame.groundY = 196;
}

function initRushGame() {
  if (rushGame) return;

  rushGame = {
    canvas: elements.runnerCanvas,
    context: elements.runnerCanvas.getContext("2d"),
    width: RUSH_CANVAS_BASE_WIDTH,
    height: RUSH_CANVAS_BASE_HEIGHT,
    groundY: 196,
    state: "idle",
    lastTime: 0,
    animationFrame: null,
    score: 0,
    elapsedTime: 0,
    best: Number(readStorage(RUSH_BEST_KEY, 0)) || 0,
    baseSpeed: 12,
    maxSpeed: 40,
    currentSpeed: 12,
    speedIncrease: 0,
    baseSpawnInterval: 930,
    currentSpawnInterval: 930,
    spawnDifficulty: 0,
    difficultyTier: 0,
    speedNoticeTimer: 0,
    spawnNoticeTimer: 0,
    difficultyNoticeTimer: 0,
    spawnTimer: 0,
    lastObstacleX: 0,
    obstacles: [],
    clouds: [
      { x: 72, y: 36, size: 14 },
      { x: 252, y: 52, size: 18 },
      { x: 462, y: 30, size: 12 }
    ],
    player: createRushPlayer()
  };
  resizeRushCanvas();
  updateRushHud();
  initRushMusic();
  showRushOverlay("idle");
}

function createRushPlayer() {
  return {
    x: 42,
    y: 142,
    width: 31,
    standHeight: 54,
    duckHeight: 32,
    height: 54,
    velocityY: 0,
    isDucking: false,
    grounded: true
  };
}

function startRushGame() {
  initRushGame();
  resizeRushCanvas();
  cancelRushAnimation();
  rushGame.state = "running";
  rushGame.lastTime = 0;
  rushGame.score = 0;
  rushGame.elapsedTime = 0;
  rushGame.currentSpeed = rushGame.baseSpeed;
  rushGame.speedIncrease = 0;
  rushGame.currentSpawnInterval = rushGame.baseSpawnInterval;
  rushGame.spawnDifficulty = 0;
  rushGame.difficultyTier = 0;
  rushGame.speedNoticeTimer = 0;
  rushGame.spawnNoticeTimer = 0;
  rushGame.difficultyNoticeTimer = 0;
  rushGame.spawnTimer = 0.8;
  rushGame.lastObstacleX = 0;
  rushGame.obstacles = [];
  rushGame.player = createRushPlayer();
  elements.runnerOverlay.classList.add("hidden");
  updateRushHud();
  elements.runnerCanvas.focus();
  startRushMusic();
  rushGame.animationFrame = window.requestAnimationFrame(runRushGameFrame);
}

function runRushGameFrame(timestamp) {
  if (!rushGame || rushGame.state !== "running") return;

  const delta = rushGame.lastTime ? Math.min(0.034, (timestamp - rushGame.lastTime) / 1000) : 0;
  rushGame.lastTime = timestamp;
  updateRushGame(delta);
  drawRushGame();

  if (rushGame.state === "running") {
    rushGame.animationFrame = window.requestAnimationFrame(runRushGameFrame);
  }
}

function updateRushGame(delta) {
  const player = rushGame.player;
  const previousSpeedIncrease = rushGame.speedIncrease;
  const previousSpawnDifficulty = rushGame.spawnDifficulty;
  const previousDifficultyTier = rushGame.difficultyTier;
  rushGame.elapsedTime += delta;
  rushGame.score += delta * 10;
  const speedState = getRushSpeedForScore(rushGame.score);
  const spawnState = getRushSpawnStateForScore(rushGame.score);
  rushGame.difficultyTier = getRushDifficultyTier(rushGame.score);
  rushGame.currentSpeed = speedState.currentSpeed;
  rushGame.speedIncrease = speedState.speedIncrease;
  rushGame.currentSpawnInterval = spawnState.currentSpawnInterval;
  rushGame.spawnDifficulty = spawnState.spawnDifficulty;
  if (rushGame.speedIncrease > previousSpeedIncrease) {
    rushGame.speedNoticeTimer = 1.2;
  }
  if (rushGame.spawnDifficulty > previousSpawnDifficulty) {
    rushGame.spawnNoticeTimer = 1.2;
  }
  if (rushGame.difficultyTier > previousDifficultyTier) {
    rushGame.difficultyNoticeTimer = 1.4;
  }
  rushGame.speedNoticeTimer = Math.max(0, rushGame.speedNoticeTimer - delta);
  rushGame.spawnNoticeTimer = Math.max(0, rushGame.spawnNoticeTimer - delta);
  rushGame.difficultyNoticeTimer = Math.max(0, rushGame.difficultyNoticeTimer - delta);
  rushGame.spawnTimer -= delta;

  if (rushGame.spawnTimer <= 0) {
    if (canSpawnRushObstacle()) {
      spawnRushObstacle();
    }
    rushGame.spawnTimer = getRushNextSpawnDelay();
  }

  player.velocityY += RUSH_GRAVITY * delta;
  player.y += player.velocityY * delta;

  const targetHeight = player.isDucking && player.grounded ? player.duckHeight : player.standHeight;
  const previousBottom = player.y + player.height;
  player.height = targetHeight;
  player.y = previousBottom - player.height;

  const floorY = rushGame.groundY - player.height;
  if (player.y >= floorY) {
    player.y = floorY;
    player.velocityY = 0;
    player.grounded = true;
  } else {
    player.grounded = false;
  }

  rushGame.obstacles.forEach((obstacle) => {
    obstacle.x -= getRushPixelsPerSecond() * delta;
    syncRushObstacleHitbox(obstacle);
  });
  rushGame.obstacles = rushGame.obstacles.filter((obstacle) => obstacle.x + obstacle.width > -24);

  if (rushGame.obstacles.some((obstacle) => boxesOverlap(getRushPlayerHitbox(), obstacle.hitbox))) {
    endRushGame();
    return;
  }

  updateRushHud();
}

function spawnRushObstacle() {
  const tier = getRushDifficultyTier(rushGame.score);
  const startX = rushGame.width + 18;

  if (tier >= 2 && Math.random() < 0.24) {
    const pattern = pickRushDoublePattern();
    const obstacles = buildRushPattern(pattern, startX);
    rushGame.obstacles.push(...obstacles);
    rushGame.lastObstacleX = obstacles[obstacles.length - 1].x;
    return;
  }

  const obstacle = createRushObstacle(pickRushSingleObstacle(tier), startX);
  rushGame.obstacles.push(obstacle);
  rushGame.lastObstacleX = obstacle.x;
}

function getRushDifficultyTier(score) {
  if (score >= 700) return 2;
  if (score >= 300) return 1;
  return 0;
}

function getRushObstacleLibrary() {
  return {
    banana: {
      kind: "banana",
      category: "jump",
      label: "banana peel",
      width: 36,
      height: 16,
      y: rushGame.groundY - 16,
      hitboxInsets: { left: 6, top: 3, right: 8, bottom: 2 }
    },
    coffee: {
      kind: "coffee",
      category: "jump",
      label: "spilled coffee",
      width: 40,
      height: 15,
      y: rushGame.groundY - 15,
      hitboxInsets: { left: 5, top: 2, right: 7, bottom: 2 }
    },
    scooter: {
      kind: "scooter",
      category: "jump",
      label: "sidewalk scooter",
      width: 48,
      height: 34,
      y: rushGame.groundY - 34,
      hitboxInsets: { left: 4, top: 4, right: 6, bottom: 2 }
    },
    gate: {
      kind: "gate",
      category: "jump",
      label: "station gate",
      width: 40,
      height: 46,
      y: rushGame.groundY - 46,
      hitboxInsets: { left: 6, top: 4, right: 6, bottom: 2 }
    },
    sign: {
      kind: "sign",
      category: "duck",
      label: "low meeting sign",
      width: 62,
      height: 36,
      y: rushGame.groundY - 76,
      hitboxInsets: { left: 4, top: 4, right: 4, bottom: 5 }
    },
    bar: {
      kind: "bar",
      category: "duck",
      label: "commute barrier",
      width: 68,
      height: 32,
      y: rushGame.groundY - 70,
      hitboxInsets: { left: 3, top: 3, right: 3, bottom: 7 }
    },
    bollard: {
      kind: "bollard",
      category: "jump",
      label: "station bollard",
      width: 28,
      height: 34,
      y: rushGame.groundY - 34,
      hitboxInsets: { left: 3, top: 3, right: 3, bottom: 2 }
    },
    pedestrian: {
      kind: "pedestrian",
      category: "jump",
      label: "distracted pedestrian",
      width: 38,
      height: 52,
      y: rushGame.groundY - 52,
      hitboxInsets: { left: 5, top: 4, right: 5, bottom: 2 }
    },
    banner: {
      kind: "banner",
      category: "duck",
      label: "hanging promo banner",
      width: 72,
      height: 36,
      y: rushGame.groundY - 68,
      hitboxInsets: { left: 4, top: 3, right: 4, bottom: 10 }
    }
  };
}

function pickRushSingleObstacle(tier) {
  const library = getRushObstacleLibrary();
  const pools = [
    [library.banana, library.coffee, library.sign, library.bar],
    [library.banana, library.coffee, library.scooter, library.gate, library.sign, library.bar, library.bollard, library.banner],
    [library.banana, library.coffee, library.scooter, library.gate, library.sign, library.bar, library.bollard, library.banner, library.pedestrian]
  ];

  return pickRandom(pools[tier] || pools[0]);
}

function pickRushDoublePattern() {
  const library = getRushObstacleLibrary();
  const patterns = [
    { sequence: [library.banana, library.coffee], gapMin: 170, gapMax: 220 },
    { sequence: [library.coffee, library.gate], gapMin: 185, gapMax: 235 },
    { sequence: [library.sign, library.scooter], gapMin: 190, gapMax: 240 },
    { sequence: [library.banner, library.banana], gapMin: 205, gapMax: 255 },
    { sequence: [library.bollard, library.sign], gapMin: 240, gapMax: 300 }
  ];

  return pickRandom(patterns);
}

function buildRushPattern(pattern, startX) {
  const obstacles = [];
  let nextX = startX;

  pattern.sequence.forEach((template, index) => {
    const obstacle = createRushObstacle(template, nextX);
    obstacles.push(obstacle);

    if (index < pattern.sequence.length - 1) {
      const spacing = randomBetween(pattern.gapMin, pattern.gapMax);
      nextX = obstacle.x + obstacle.width + spacing;
    }
  });

  return obstacles;
}

function createRushObstacle(template, x) {
  const obstacle = {
    ...template,
    x,
    hitbox: { x, y: template.y, width: template.width, height: template.height }
  };

  syncRushObstacleHitbox(obstacle);
  return obstacle;
}

function syncRushObstacleHitbox(obstacle) {
  const insets = obstacle.hitboxInsets || { left: 0, top: 0, right: 0, bottom: 0 };
  obstacle.hitbox.x = obstacle.x + insets.left;
  obstacle.hitbox.y = obstacle.y + insets.top;
  obstacle.hitbox.width = Math.max(8, obstacle.width - insets.left - insets.right);
  obstacle.hitbox.height = Math.max(8, obstacle.height - insets.top - insets.bottom);
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function getRushSpeedForScore(score) {
  const speedIncrease = Math.floor(score / 100);
  const currentSpeed = Math.min(rushGame.baseSpeed + speedIncrease, rushGame.maxSpeed);

  return {
    speedIncrease,
    currentSpeed
  };
}

function getRushPixelsPerSecond() {
  return rushGame.currentSpeed * 24;
}

function getRushSpawnStateForScore(score) {
  const spawnDifficulty = Math.floor(score / 300);
  const spawnReduction = spawnDifficulty * 120;
  const currentSpawnInterval = Math.max(rushGame.baseSpawnInterval - spawnReduction, 500);

  return {
    spawnDifficulty,
    currentSpawnInterval
  };
}

function getRushNextSpawnDelay() {
  const tier = getRushDifficultyTier(rushGame.score);
  const baseDelay = rushGame.currentSpawnInterval / 1000;
  const jitterBase = tier >= 2 ? 0.08 : tier === 1 ? 0.1 : 0.14;
  const jitterRange = tier >= 2 ? 0.12 : tier === 1 ? 0.18 : 0.22;
  const jitter = jitterBase + Math.random() * jitterRange;
  return Math.max(getRushMinimumSpawnDelay(), baseDelay + jitter);
}

function getRushMinimumSpawnDelay() {
  return getRushMinimumObstacleSpacing() / getRushPixelsPerSecond();
}

function getRushMinimumObstacleSpacing() {
  if (rushGame.difficultyTier >= 2) {
    return 100 + rushGame.currentSpeed * 8;
  }

  if (rushGame.difficultyTier === 1) {
    return 110 + rushGame.currentSpeed * 8.5;
  }

  return 120 + rushGame.currentSpeed * 9;
}

function canSpawnRushObstacle() {
  const lastObstacle = rushGame.obstacles[rushGame.obstacles.length - 1];

  if (!lastObstacle) return true;

  const distance = rushGame.width + 18 - (lastObstacle.x + lastObstacle.width);
  return distance >= getRushMinimumObstacleSpacing();
}

function jumpRushPlayer() {
  if (!rushGame || rushGame.state !== "running") return;

  const player = rushGame.player;
  if (!player.grounded) return;

  player.velocityY = RUSH_JUMP_VELOCITY;
  player.grounded = false;
  playRushSound("jump");
}

function setRushDucking(isDucking) {
  if (!rushGame || rushGame.state !== "running") return;
  if (isDucking && (!rushGame.player.grounded || rushGame.player.isDucking)) return;

  rushGame.player.isDucking = isDucking;

  if (isDucking) {
    playRushSound("duck");
  }
}

function endRushGame() {
  playRushSound("hit");
  pauseRushMusic();
  rushGame.state = "gameOver";
  cancelRushAnimation();
  rushGame.best = Math.max(getRushBestScore(), rushGame.best, Math.floor(rushGame.score));
  writeStorage(RUSH_BEST_KEY, rushGame.best);
  updateRushHud();
  drawRushGame();
  showRushOverlay("gameOver");
}

function cancelRushAnimation() {
  if (rushGame && rushGame.animationFrame) {
    window.cancelAnimationFrame(rushGame.animationFrame);
    rushGame.animationFrame = null;
  }
}

function initRushMusic() {
  if (rushMusic) {
    updateRushMusicButton();
    return rushMusic;
  }

  const audio = new Audio(RUSH_BGM_PATH);
  audio.loop = true;
  audio.volume = 0.18;
  audio.preload = "none";

  rushMusic = {
    audio,
    muted: readStorage(RUSH_MUSIC_MUTED_KEY, false) === true,
    unavailable: false
  };
  audio.muted = rushMusic.muted;

  audio.addEventListener("error", () => {
    rushMusic.unavailable = true;
    pauseRushMusic();
    updateRushMusicButton();
  });

  updateRushMusicButton();
  return rushMusic;
}

function startRushMusic() {
  const music = initRushMusic();
  if (!music || music.muted || music.unavailable) return;

  music.audio.play().catch(() => {
    music.unavailable = true;
    updateRushMusicButton();
  });
}

function pauseRushMusic() {
  if (!rushMusic || !rushMusic.audio) return;
  rushMusic.audio.pause();
}

function toggleRushMusic() {
  const music = initRushMusic();
  if (!music || music.unavailable) return;

  music.muted = !music.muted;
  music.audio.muted = music.muted;
  writeStorage(RUSH_MUSIC_MUTED_KEY, music.muted);
  updateRushMusicButton();

  if (music.muted) {
    pauseRushMusic();
    return;
  }

  if (rushGame && rushGame.state === "running") {
    startRushMusic();
  }
}

function updateRushMusicButton() {
  if (!elements.runnerMusicToggle) return;

  if (!rushMusic) {
    elements.runnerMusicToggle.disabled = false;
    elements.runnerMusicToggle.textContent = t("musicOn");
    elements.runnerMusicToggle.setAttribute("aria-pressed", "true");
    return;
  }

  if (rushMusic.unavailable) {
    elements.runnerMusicToggle.disabled = true;
    elements.runnerMusicToggle.textContent = t("musicUnavailable");
    elements.runnerMusicToggle.setAttribute("aria-pressed", "false");
    return;
  }

  elements.runnerMusicToggle.disabled = false;
  elements.runnerMusicToggle.textContent = rushMusic.muted ? t("musicOff") : t("musicOn");
  elements.runnerMusicToggle.setAttribute("aria-pressed", String(!rushMusic.muted));
}

function getRushAudioContext() {
  if (!rushSounds) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;

    rushSounds = {
      context: new AudioContextClass(),
      masterGain: null
    };
    rushSounds.masterGain = rushSounds.context.createGain();
    rushSounds.masterGain.gain.value = 0.16;
    rushSounds.masterGain.connect(rushSounds.context.destination);
  }

  if (rushSounds.context.state === "suspended") {
    rushSounds.context.resume();
  }

  return rushSounds.context;
}

function playRushSound(type) {
  const context = getRushAudioContext();
  if (!context || !rushSounds.masterGain) return;

  const soundMap = {
    jump: playProceduralJumpSound,
    duck: playProceduralDuckSound,
    hit: playProceduralHitSound
  };
  const playSound = soundMap[type];

  if (playSound) {
    playSound(context, rushSounds.masterGain);
  }
}

function playProceduralJumpSound(context, destination) {
  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(420, now);
  oscillator.frequency.exponentialRampToValueAtTime(760, now + 0.12);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.42, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
  oscillator.connect(gain);
  gain.connect(destination);
  oscillator.start(now);
  oscillator.stop(now + 0.15);
}

function playProceduralDuckSound(context, destination) {
  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(180, now);
  oscillator.frequency.exponentialRampToValueAtTime(95, now + 0.09);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.24, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);
  oscillator.connect(gain);
  gain.connect(destination);
  oscillator.start(now);
  oscillator.stop(now + 0.12);
}

function playProceduralHitSound(context, destination) {
  const now = context.currentTime;
  const noise = context.createBufferSource();
  const buffer = context.createBuffer(1, context.sampleRate * 0.16, context.sampleRate);
  const data = buffer.getChannelData(0);
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  const thud = context.createOscillator();
  const thudGain = context.createGain();

  for (let index = 0; index < data.length; index += 1) {
    data[index] = (Math.random() * 2 - 1) * (1 - index / data.length);
  }

  noise.buffer = buffer;
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(520, now);
  gain.gain.setValueAtTime(0.5, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(destination);

  thud.type = "sine";
  thud.frequency.setValueAtTime(105, now);
  thud.frequency.exponentialRampToValueAtTime(52, now + 0.18);
  thudGain.gain.setValueAtTime(0.36, now);
  thudGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
  thud.connect(thudGain);
  thudGain.connect(destination);

  noise.start(now);
  thud.start(now);
  noise.stop(now + 0.17);
  thud.stop(now + 0.22);
}

function handleRushGameKeyDown(event) {
  if (!isRushGameVisible()) return;
  if (isTypingField(document.activeElement)) return;

  if (event.code === "Space") {
    event.preventDefault();
    if (!rushGame || rushGame.state !== "running") {
      startRushGame();
      return;
    }
    jumpRushPlayer();
  }

  if (event.key.toLowerCase() === "s") {
    event.preventDefault();
    setRushDucking(true);
  }
}

function handleRushGameKeyUp(event) {
  if (!isRushGameVisible()) return;
  if (isTypingField(document.activeElement)) return;

  if (event.key.toLowerCase() === "s") {
    event.preventDefault();
    setRushDucking(false);
  }
}

function isRushGameVisible() {
  return !elements.breakPanel.classList.contains("hidden") && !elements.gameContainer.classList.contains("hidden");
}

function isTypingField(element) {
  if (!element) return false;

  return ["INPUT", "TEXTAREA", "SELECT"].includes(element.tagName);
}

function updateRushHud() {
  if (!rushGame) return;

  elements.runnerScore.textContent = String(Math.floor(rushGame.score));
  elements.runnerBest.textContent = String(rushGame.best);
}

function showRushOverlay(mode) {
  elements.runnerOverlay.classList.remove("hidden");
  elements.runnerOverlayTitle.textContent = mode === "gameOver" ? t("rushGameOver") : t("rushToWork");
  elements.runnerOverlayCopy.textContent = mode === "gameOver" ? t("rushGameOverCopy") : t("rushStartCopy");
  elements.runnerStartButton.textContent = mode === "gameOver" ? t("restartGame") : t("startGame");
}

function getRushBestScore() {
  return Math.max(0, Math.floor(Number(readStorage(RUSH_BEST_KEY, 0)) || 0));
}

function drawRushGame() {
  if (!rushGame) return;

  const ctx = rushGame.context;
  const scaleX = rushGame.canvas.width / rushGame.width;
  const scaleY = rushGame.canvas.height / rushGame.height;

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, rushGame.canvas.width, rushGame.canvas.height);
  ctx.setTransform(scaleX, 0, 0, scaleY, 0, 0);
  drawRushBackground(ctx);
  rushGame.obstacles.forEach((obstacle) => drawRushObstacle(ctx, obstacle, rushGame.elapsedTime || 0));
  drawRushPlayer(ctx, rushGame.player, rushGame.elapsedTime || 0);
  drawRushSpeedNotice(ctx);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function drawRushBackground(ctx) {
  ctx.fillStyle = "#151713";
  ctx.fillRect(0, 0, rushGame.width, rushGame.height);
  ctx.fillStyle = "rgba(52, 198, 172, 0.08)";
  ctx.fillRect(0, 0, rushGame.width, rushGame.height);

  rushGame.clouds.forEach((cloud, index) => {
    const drift = rushGame.state === "running" ? (rushGame.score * (0.6 + index * 0.2)) % (rushGame.width + 80) : 0;
    const x = (cloud.x - drift + rushGame.width + 60) % (rushGame.width + 80) - 40;
    ctx.fillStyle = "rgba(174, 183, 172, 0.18)";
    ctx.beginPath();
    ctx.arc(x, cloud.y, cloud.size, 0, Math.PI * 2);
    ctx.arc(x + cloud.size, cloud.y + 3, cloud.size * 0.75, 0, Math.PI * 2);
    ctx.arc(x - cloud.size, cloud.y + 4, cloud.size * 0.7, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.strokeStyle = "#3d443b";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, rushGame.groundY + 1);
  ctx.lineTo(rushGame.width, rushGame.groundY + 1);
  ctx.stroke();

  ctx.strokeStyle = "rgba(244, 241, 233, 0.16)";
  ctx.setLineDash([10, 12]);
  ctx.beginPath();
  ctx.moveTo(0, rushGame.groundY + 22);
  ctx.lineTo(rushGame.width, rushGame.groundY + 22);
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawRushPlayer(ctx, player, gameTime) {
  const pose = getRushPlayerPose(player, gameTime);
  const metrics = getRushPlayerMetrics(player, pose);
  const footX = player.x + player.width / 2 + pose.shakeX;
  const footY = player.y + player.height;

  drawRushPlayerShadow(ctx, footX, footY, metrics, pose);

  if (rushGame && rushGame.state === "running" && rushGame.currentSpeed >= 24 && player.grounded) {
    drawRushMotionLines(ctx, footX, footY, metrics, pose);
  }

  ctx.save();
  ctx.translate(footX, footY - pose.bounce);
  ctx.rotate(pose.tilt);

  drawRushBackpack(ctx, metrics);
  drawRushLeg(ctx, -metrics.hipOffset, -metrics.legAnchorY, metrics.legLength, pose.backLegAngle, metrics, false);
  drawRushLeg(ctx, metrics.hipOffset, -metrics.legAnchorY, metrics.legLength, pose.frontLegAngle, metrics, true);
  drawRushTorso(ctx, metrics);
  drawRushArm(ctx, -metrics.shoulderOffset, -metrics.shoulderY, metrics.armLength, pose.backArmAngle, metrics, "bread");
  drawRushArm(ctx, metrics.shoulderOffset, -metrics.shoulderY, metrics.armLength, pose.frontArmAngle, metrics, "coffee");
  drawRushHead(ctx, metrics, pose);

  ctx.restore();
}

function getRushPlayerPose(player, gameTime) {
  const ducking = player.isDucking && player.grounded;
  const running = rushGame && rushGame.state === "running" && player.grounded && !ducking;
  const speed = rushGame ? rushGame.currentSpeed : 0;
  const runPhase = gameTime * (7.5 + speed * 0.18);
  const runSwing = running ? Math.sin(runPhase) : 0;
  const secondarySwing = running ? Math.sin(runPhase * 2) : 0;
  const airborne = !player.grounded;
  const crashed = rushGame && rushGame.state === "gameOver";

  return {
    ducking,
    airborne,
    running,
    runPhase,
    bounce: running ? Math.abs(secondarySwing) * 1.8 : airborne ? 0.8 : 0,
    tilt: ducking ? 0.08 : airborne ? -0.18 : runSwing * 0.03,
    bodyLean: ducking ? 0.1 : airborne ? -0.14 : runSwing * 0.04,
    frontLegAngle: ducking ? -0.25 : runSwing * 0.75,
    backLegAngle: ducking ? 0.2 : -runSwing * 0.7,
    frontArmAngle: ducking ? 0.45 : -runSwing * 0.55 + (airborne ? -0.18 : 0),
    backArmAngle: ducking ? -0.3 : runSwing * 0.5 + (airborne ? 0.22 : 0),
    shakeX: crashed ? Math.sin(gameTime * 44) * 1.4 : 0,
    stressed: crashed
  };
}

function getRushPlayerMetrics(player, pose) {
  const ducking = pose.ducking;

  return {
    headRadius: ducking ? 7 : 8,
    torsoWidth: ducking ? 24 : 18,
    torsoHeight: ducking ? 16 : 23,
    legLength: ducking ? 12 : 20,
    armLength: ducking ? 15 : 18,
    shoulderOffset: ducking ? 10 : 9,
    shoulderY: ducking ? 21 : 34,
    hipOffset: ducking ? 6.5 : 5.5,
    legAnchorY: ducking ? 12 : 20,
    armThickness: ducking ? 4.2 : 4.8,
    legThickness: ducking ? 5.4 : 5.8,
    footWidth: ducking ? 10 : 11,
    footHeight: 4,
    headCenterY: ducking ? 32 : 43,
    shadowWidth: ducking ? 25 : 21,
    shadowHeight: ducking ? 5.5 : 4.5,
    bodyBottomY: ducking ? 15 : 24
  };
}

function drawRushPlayerShadow(ctx, footX, footY, metrics, pose) {
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0.26)";
  ctx.beginPath();
  ctx.ellipse(
    footX,
    rushGame.groundY + 4,
    metrics.shadowWidth + (pose.running ? 1.5 : 0),
    metrics.shadowHeight,
    0,
    0,
    Math.PI * 2
  );
  ctx.fill();
  ctx.restore();
}

function drawRushMotionLines(ctx, footX, footY, metrics, pose) {
  const alpha = Math.min(0.3, 0.12 + (rushGame.currentSpeed - 24) * 0.012);
  ctx.save();
  ctx.strokeStyle = `rgba(244, 241, 233, ${alpha})`;
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  for (let index = 0; index < 3; index += 1) {
    const offsetY = -metrics.headCenterY + index * 10 + pose.bounce * 0.5;
    const length = 12 + index * 3;
    ctx.beginPath();
    ctx.moveTo(footX - 28 - index * 6, footY + offsetY);
    ctx.lineTo(footX - 28 - index * 6 - length, footY + offsetY + 1);
    ctx.stroke();
  }
  ctx.restore();
}

function drawRushBackpack(ctx, metrics) {
  const x = -metrics.torsoWidth / 2 - 5;
  const y = -metrics.shoulderY + 2;
  const height = metrics.torsoHeight - 1;
  fillRoundRect(ctx, x, y, 9, height, 4, "#2d3d53");
  fillRoundRect(ctx, x + 2, y + 3, 5, 4, 2, "#34c6ac");

  ctx.strokeStyle = "rgba(173, 185, 204, 0.55)";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(-metrics.torsoWidth / 2 - 1, -metrics.shoulderY + 1);
  ctx.lineTo(-metrics.torsoWidth / 2 - 6, -metrics.shoulderY + 9);
  ctx.stroke();
}

function drawRushTorso(ctx, metrics) {
  const bodyX = -metrics.torsoWidth / 2;
  const bodyY = -metrics.shoulderY;

  fillRoundRect(ctx, bodyX, bodyY, metrics.torsoWidth, metrics.torsoHeight, 6, "#253044");
  fillRoundRect(ctx, bodyX + 3, bodyY + 3, metrics.torsoWidth - 6, metrics.torsoHeight - 6, 5, "#f4f1e9");

  ctx.fillStyle = "#34c6ac";
  ctx.beginPath();
  ctx.moveTo(0, bodyY + 6);
  ctx.lineTo(-2.5, bodyY + 9);
  ctx.lineTo(-1, bodyY + metrics.torsoHeight - 3);
  ctx.lineTo(1, bodyY + metrics.torsoHeight - 3);
  ctx.lineTo(2.5, bodyY + 9);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#d7dde6";
  ctx.beginPath();
  ctx.moveTo(-5, bodyY + 2);
  ctx.lineTo(0, bodyY + 7);
  ctx.lineTo(5, bodyY + 2);
  ctx.closePath();
  ctx.fill();

  fillRoundRect(ctx, -metrics.torsoWidth / 2 + 1, -metrics.legAnchorY - 1, metrics.torsoWidth - 2, 6, 2, "#20241f");
}

function drawRushLeg(ctx, x, y, length, angle, metrics, frontLeg) {
  const endX = x + Math.sin(angle) * length * 0.55;
  const endY = y + length;
  ctx.save();
  ctx.strokeStyle = frontLeg ? "#2f3540" : "#28303a";
  ctx.lineWidth = metrics.legThickness;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(endX, endY - 4);
  ctx.stroke();

  ctx.fillStyle = "#f09a3e";
  fillRoundRect(ctx, endX - metrics.footWidth / 2, endY - metrics.footHeight, metrics.footWidth, metrics.footHeight, 2, "#f09a3e");
  ctx.restore();
}

function drawRushArm(ctx, x, y, length, angle, metrics, item) {
  const elbowX = x + Math.cos(angle) * (length * 0.55);
  const elbowY = y + Math.sin(angle) * (length * 0.35);
  const handX = elbowX + Math.cos(angle + 0.12) * (length * 0.45);
  const handY = elbowY + Math.sin(angle + 0.12) * (length * 0.55);

  ctx.save();
  ctx.strokeStyle = "#efc29c";
  ctx.lineWidth = metrics.armThickness;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(elbowX, elbowY);
  ctx.lineTo(handX, handY);
  ctx.stroke();

  if (item === "coffee") {
    drawRushCoffee(ctx, handX + 2, handY - 1);
  } else {
    drawRushBread(ctx, handX - 8, handY - 4);
  }

  ctx.restore();
}

function drawRushHead(ctx, metrics, pose) {
  const headY = -metrics.headCenterY;

  ctx.save();
  ctx.translate(0, headY);
  ctx.rotate(pose.bodyLean);

  ctx.fillStyle = "#efc29c";
  ctx.beginPath();
  ctx.arc(0, 0, metrics.headRadius, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#20241f";
  ctx.beginPath();
  ctx.moveTo(-metrics.headRadius + 1, -2);
  ctx.quadraticCurveTo(0, -metrics.headRadius - 4, metrics.headRadius - 1, -1);
  ctx.lineTo(metrics.headRadius - 1, -metrics.headRadius + 2);
  ctx.quadraticCurveTo(0, -metrics.headRadius - 1, -metrics.headRadius + 1, -metrics.headRadius + 2);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "#20241f";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-3.8, -1);
  ctx.lineTo(-1.5, -1.8);
  ctx.moveTo(1.5, -1.8);
  ctx.lineTo(3.8, -1);
  ctx.stroke();

  ctx.fillStyle = "#20241f";
  ctx.beginPath();
  ctx.arc(-2.4, 1.5, 0.9, 0, Math.PI * 2);
  ctx.arc(2.4, 1.5, 0.9, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#20241f";
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  if (pose.stressed) {
    ctx.moveTo(-2.8, 5);
    ctx.lineTo(-1.2, 4.1);
    ctx.lineTo(0, 5.2);
    ctx.lineTo(1.4, 4.1);
    ctx.lineTo(3, 5);
  } else {
    ctx.arc(0, 4.8, 2.7, 0.12 * Math.PI, 0.88 * Math.PI, false);
  }
  ctx.stroke();

  if (pose.stressed) {
    ctx.fillStyle = "rgba(107, 184, 255, 0.82)";
    ctx.beginPath();
    ctx.moveTo(metrics.headRadius - 1, 1);
    ctx.lineTo(metrics.headRadius + 3, 7);
    ctx.lineTo(metrics.headRadius - 2, 8);
    ctx.closePath();
    ctx.fill();
  }

  ctx.restore();
}

function drawRushCoffee(ctx, x, y) {
  fillRoundRect(ctx, x, y, 8, 12, 2, "#f4f1e9");
  ctx.fillStyle = "#c74338";
  ctx.fillRect(x - 1, y - 3, 10, 4);
  ctx.strokeStyle = "rgba(244, 241, 233, 0.52)";
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(x + 4, y - 5);
  ctx.quadraticCurveTo(x + 8, y - 11, x + 5, y - 14);
  ctx.stroke();
}

function drawRushBread(ctx, x, y) {
  ctx.fillStyle = "#e0b64b";
  ctx.beginPath();
  ctx.moveTo(x + 3, y + 10);
  ctx.lineTo(x + 10, y + 10);
  ctx.quadraticCurveTo(x + 13, y + 10, x + 13, y + 7);
  ctx.quadraticCurveTo(x + 13, y, x + 6.5, y);
  ctx.quadraticCurveTo(x, y, x, y + 7);
  ctx.quadraticCurveTo(x, y + 10, x + 3, y + 10);
  ctx.fill();
  ctx.fillStyle = "rgba(255, 236, 171, 0.45)";
  ctx.fillRect(x + 3, y + 3, 7, 2);
}

function fillRoundRect(ctx, x, y, width, height, radius, color) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
  ctx.fill();
}

function drawRushObstacle(ctx, obstacle, gameTime) {
  const animation = getRushObstacleVisualState(obstacle, gameTime);

  if (obstacle.category === "jump") {
    drawRushObstacleShadow(ctx, obstacle, animation);
  }

  if (rushGame && rushGame.currentSpeed >= 24) {
    drawRushObstacleMotionLines(ctx, obstacle, animation);
  }

  ctx.save();
  ctx.translate(obstacle.x + animation.offsetX, obstacle.y + animation.offsetY);

  if (obstacle.category === "duck") {
    ctx.translate(obstacle.width / 2, 0);
    ctx.rotate(animation.swing);
    ctx.translate(-obstacle.width / 2, 0);
  } else if (animation.rotation) {
    ctx.translate(obstacle.width / 2, obstacle.height / 2);
    ctx.rotate(animation.rotation);
    ctx.translate(-obstacle.width / 2, -obstacle.height / 2);
  }

  if (obstacle.kind === "banana") {
    drawRushBananaObstacle(ctx, obstacle, animation);
  } else if (obstacle.kind === "coffee") {
    drawRushCoffeeObstacle(ctx, obstacle, animation);
  } else if (obstacle.kind === "scooter") {
    drawRushScooterObstacle(ctx, obstacle, animation);
  } else if (obstacle.kind === "gate") {
    drawRushGateObstacle(ctx, obstacle, animation);
  } else if (obstacle.kind === "bollard") {
    drawRushBollardObstacle(ctx, obstacle);
  } else if (obstacle.kind === "pedestrian") {
    drawRushPedestrianObstacle(ctx, obstacle, animation);
  } else if (obstacle.kind === "banner") {
    drawRushBannerObstacle(ctx, obstacle, animation);
  } else if (obstacle.kind === "sign") {
    drawRushSignObstacle(ctx, obstacle, animation);
  } else if (obstacle.kind === "bar") {
    drawRushBarrierObstacle(ctx, obstacle, animation);
  }

  ctx.restore();
}

function getRushObstacleVisualState(obstacle, gameTime) {
  const phase = gameTime * 4.2 + obstacle.x * 0.025;
  const shimmer = 0.7 + Math.sin(phase * 1.4) * 0.2;
  const wheelRotation = gameTime * (6 + (rushGame ? rushGame.currentSpeed : 0) * 0.18);

  return {
    phase,
    shimmer,
    wheelRotation,
    wobble: Math.sin(phase) * 0.08,
    swing: Math.sin(phase * 0.9) * 0.08,
    bob: Math.sin(phase * 1.3) * 1.4,
    step: Math.sin(phase * 1.8),
    offsetX: 0,
    offsetY: obstacle.kind === "pedestrian" ? Math.sin(phase * 1.8) * 0.7 : 0,
    rotation: obstacle.kind === "banana" ? Math.sin(phase) * 0.12 : 0
  };
}

function drawRushObstacleShadow(ctx, obstacle, animation) {
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0.24)";
  ctx.beginPath();
  ctx.ellipse(
    obstacle.x + obstacle.width / 2,
    rushGame.groundY + 4,
    Math.max(9, obstacle.width * 0.42),
    4 + (obstacle.kind === "pedestrian" ? 1 : 0),
    0,
    0,
    Math.PI * 2
  );
  ctx.fill();
  ctx.restore();
}

function drawRushObstacleMotionLines(ctx, obstacle, animation) {
  ctx.save();
  ctx.strokeStyle = "rgba(244, 241, 233, 0.16)";
  ctx.lineWidth = 1.6;
  ctx.lineCap = "round";
  const centerY = obstacle.y + obstacle.height / 2;
  const lines = obstacle.category === "duck" ? 2 : 3;

  for (let index = 0; index < lines; index += 1) {
    const offsetY = centerY - 10 + index * 8;
    const length = 10 + index * 4;
    ctx.beginPath();
    ctx.moveTo(obstacle.x - 8 - index * 5, offsetY);
    ctx.lineTo(obstacle.x - 8 - index * 5 - length, offsetY + (animation.bob * 0.08));
    ctx.stroke();
  }

  ctx.restore();
}

function drawRushBananaObstacle(ctx, obstacle, animation) {
  ctx.save();
  ctx.translate(obstacle.width / 2, obstacle.height / 2);
  ctx.rotate(animation.wobble);
  ctx.translate(-obstacle.width / 2, -obstacle.height / 2);

  ctx.strokeStyle = "#9a7b1f";
  ctx.lineWidth = 4.6;
  ctx.beginPath();
  ctx.arc(15, 9, 13, 0.18 * Math.PI, 0.92 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = "#f0d16a";
  ctx.lineWidth = 2.4;
  ctx.beginPath();
  ctx.arc(15, 9, 10, 0.22 * Math.PI, 0.88 * Math.PI);
  ctx.stroke();

  ctx.fillStyle = "#5e6b3f";
  ctx.fillRect(4, 9, 4, 2);
  ctx.fillRect(24, 9, 4, 2);
  ctx.restore();
}

function drawRushCoffeeObstacle(ctx, obstacle, animation) {
  ctx.fillStyle = "#4a2a17";
  ctx.beginPath();
  ctx.ellipse(20, 10, 18, 7, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = `rgba(255, 243, 211, ${0.18 + animation.shimmer * 0.18})`;
  ctx.beginPath();
  ctx.ellipse(16, 8, 8, 2.8, -0.2, 0, Math.PI * 2);
  ctx.fill();

  fillRoundRect(ctx, 6, 0, 10, 12, 2, "#f4f1e9");
  ctx.fillStyle = "#c74338";
  ctx.fillRect(5, -2, 12, 4);
  ctx.strokeStyle = "rgba(244, 241, 233, 0.5)";
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(13, -4);
  ctx.quadraticCurveTo(18, -10, 15, -15);
  ctx.stroke();
}

function drawRushScooterObstacle(ctx, obstacle, animation) {
  ctx.strokeStyle = "#2a3140";
  ctx.lineWidth = 4.4;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(8, 28);
  ctx.lineTo(31, 28);
  ctx.lineTo(24, 11);
  ctx.moveTo(31, 28);
  ctx.lineTo(39, 7);
  ctx.lineTo(35, 7);
  ctx.stroke();

  ctx.fillStyle = "#a98ee5";
  fillRoundRect(ctx, 16, 18, 18, 4, 2, "#a98ee5");
  fillRoundRect(ctx, 22, 10, 6, 8, 2, "#34c6ac");
  drawWheel(ctx, 9, 30, animation.wheelRotation);
  drawWheel(ctx, 33, 30, animation.wheelRotation);
}

function drawRushGateObstacle(ctx, obstacle, animation) {
  fillRoundRect(ctx, 4, 0, obstacle.width - 8, obstacle.height, 5, "#384038");
  fillRoundRect(ctx, 9, 7, obstacle.width - 18, 8, 2, "#34c6ac");
  fillRoundRect(ctx, 10, 19, obstacle.width - 20, 18, 3, "#20241f");
  ctx.fillStyle = "rgba(244, 241, 233, 0.16)";
  ctx.fillRect(12, 22, obstacle.width - 24, 3);
  ctx.fillStyle = "#f09a3e";
  ctx.fillRect(obstacle.width - 10, 5, 3, obstacle.height - 10);
}

function drawRushBollardObstacle(ctx, obstacle) {
  ctx.fillStyle = "#f09a3e";
  ctx.beginPath();
  ctx.moveTo(obstacle.width / 2, 0);
  ctx.lineTo(obstacle.width, obstacle.height);
  ctx.lineTo(0, obstacle.height);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#f4f1e9";
  ctx.fillRect(6, 11, obstacle.width - 12, 4);
  ctx.fillRect(4, 22, obstacle.width - 8, 4);
  ctx.fillStyle = "rgba(0, 0, 0, 0.14)";
  ctx.fillRect(8, 27, obstacle.width - 16, 4);
}

function drawRushPedestrianObstacle(ctx, obstacle, animation) {
  const sway = animation.step * 0.28;
  const headY = 8 + animation.bob * 0.25;
  ctx.fillStyle = "#efc29c";
  ctx.beginPath();
  ctx.arc(18, headY, 8, 0, Math.PI * 2);
  ctx.fill();

  fillRoundRect(ctx, 10, 16, 16, 17, 5, "#5c7ad6");
  fillRoundRect(ctx, 28, 18, 7, 11, 2, "#f4f1e9");

  ctx.strokeStyle = "#20241f";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(18, 20);
  ctx.lineTo(18, 37);
  ctx.moveTo(18, 23);
  ctx.lineTo(8, 30 + sway);
  ctx.moveTo(18, 23);
  ctx.lineTo(30, 26 - sway);
  ctx.moveTo(18, 37);
  ctx.lineTo(10, 50 - sway);
  ctx.moveTo(18, 37);
  ctx.lineTo(29, 50 + sway);
  ctx.stroke();
}

function drawRushBannerObstacle(ctx, obstacle, animation) {
  ctx.strokeStyle = "rgba(244, 241, 233, 0.55)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(8, 0);
  ctx.lineTo(8, 9);
  ctx.moveTo(obstacle.width - 8, 0);
  ctx.lineTo(obstacle.width - 8, 9);
  ctx.stroke();

  fillRoundRect(ctx, 0, 9, obstacle.width, obstacle.height - 9, 4, "#8b77d6");
  ctx.fillStyle = "rgba(255, 255, 255, 0.18)";
  ctx.fillRect(0, 12, obstacle.width, 4);
  ctx.fillStyle = "#f4f1e9";
  ctx.fillRect(10, 16, obstacle.width - 20, 4);
  ctx.fillRect(16, 24, obstacle.width - 32, 4);
}

function drawRushSignObstacle(ctx, obstacle, animation) {
  ctx.strokeStyle = "rgba(244, 241, 233, 0.5)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(10, -4);
  ctx.lineTo(10, 0);
  ctx.moveTo(obstacle.width - 10, -4);
  ctx.lineTo(obstacle.width - 10, 0);
  ctx.stroke();

  fillRoundRect(ctx, 0, 0, obstacle.width, obstacle.height, 4, "#c74338");
  ctx.fillStyle = "rgba(255, 255, 255, 0.16)";
  ctx.fillRect(0, 2, obstacle.width, 3);
  ctx.fillStyle = "#f4f1e9";
  ctx.fillRect(8, 6, obstacle.width - 16, 3);
  ctx.fillRect(12, 12, obstacle.width - 24, 2);
}

function drawRushBarrierObstacle(ctx, obstacle, animation) {
  fillRoundRect(ctx, 0, 0, obstacle.width, obstacle.height, 4, "#e0b64b");
  ctx.fillStyle = "rgba(21, 23, 19, 0.36)";
  for (let x = 4; x < obstacle.width; x += 14) {
    ctx.fillRect(x, 0, 5, obstacle.height);
  }
  ctx.fillStyle = "rgba(255, 255, 255, 0.16)";
  ctx.fillRect(0, 2, obstacle.width, 2);
}

function drawRushSpeedNotice(ctx) {
  if (!rushGame) return;

  if (rushGame.speedNoticeTimer > 0) {
    const alpha = Math.min(1, rushGame.speedNoticeTimer);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#f09a3e";
    ctx.font = "900 16px Arial";
    ctx.textAlign = "center";
    ctx.fillText(t("rushSpeedUp"), rushGame.width / 2, 34);
    ctx.restore();
  }

  if (rushGame.spawnNoticeTimer > 0) {
    const alpha = Math.min(1, rushGame.spawnNoticeTimer);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#34c6ac";
    ctx.font = "800 12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(t("rushSpawnUp"), rushGame.width / 2, 52);
    ctx.restore();
  }

  if (rushGame.difficultyNoticeTimer > 0) {
    const alpha = Math.min(1, rushGame.difficultyNoticeTimer);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#f4f1e9";
    ctx.font = "900 14px Arial";
    ctx.textAlign = "center";
    ctx.fillText(t("rushDifficultyUp"), rushGame.width / 2, 70);
    ctx.restore();
  }
}

function drawWheel(ctx, x, y, rotation = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.strokeStyle = "#f4f1e9";
  ctx.lineWidth = 2.6;
  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = "rgba(244, 241, 233, 0.6)";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(-4, 0);
  ctx.lineTo(4, 0);
  ctx.moveTo(0, -4);
  ctx.lineTo(0, 4);
  ctx.moveTo(-2.8, -2.8);
  ctx.lineTo(2.8, 2.8);
  ctx.moveTo(-2.8, 2.8);
  ctx.lineTo(2.8, -2.8);
  ctx.stroke();
  ctx.restore();
}

function getRushPlayerHitbox() {
  const player = rushGame.player;
  return {
    x: player.x + 5,
    y: player.y + 3,
    width: player.width - 8,
    height: player.height - 4
  };
}

function boxesOverlap(first, second) {
  return first.x < second.x + second.width &&
    first.x + first.width > second.x &&
    first.y < second.y + second.height &&
    first.y + first.height > second.y;
}

function clearLegacyTodayOverride(todayKey) {
  const legacyKey = "earningsTracker.hoursOverrides";
  const saved = readStorage(legacyKey, null);

  if (!saved || typeof saved !== "object" || Array.isArray(saved)) return;
  if (!Object.prototype.hasOwnProperty.call(saved, todayKey)) return;

  delete saved[todayKey];

  if (Object.keys(saved).length) {
    writeStorage(legacyKey, saved);
    return;
  }

  localStorage.removeItem(legacyKey);
}

function restoreLegacyOverrideState(value) {
  const legacyKey = "earningsTracker.hoursOverrides";

  if (value === null || value === undefined) {
    localStorage.removeItem(legacyKey);
    return;
  }

  writeStorage(legacyKey, value);
}

function normalizeState() {
  profile = normalizeProfile(profile);
  if (profile) {
    writeStorage(STORAGE_KEYS.profile, profile);
  } else {
    localStorage.removeItem(STORAGE_KEYS.profile);
  }

  timeOffRecords = Array.isArray(timeOffRecords) ? timeOffRecords.filter(isValidTimeOffRecord) : [];
  bonusRecords = Array.isArray(bonusRecords) ? bonusRecords.filter(isValidBonusRecord).map(normalizeBonusRecord) : [];
  workSessions = normalizeWorkSessions(workSessions);
  manualAdjustments = normalizeManualAdjustments(manualAdjustments);
  workSessions = workSessions.filter((session) => !manualAdjustments[session.date]);

  writeStorage(STORAGE_KEYS.timeOff, timeOffRecords);
  writeStorage(STORAGE_KEYS.bonuses, bonusRecords);
  writeStorage(STORAGE_KEYS.workSessions, workSessions);
  persistManualAdjustments();
}

function clearAllLocalData() {
  pauseRushMusic();
  localStorage.clear();
  profile = null;
  timeOffRecords = [];
  bonusRecords = [];
  workSessions = [];
  manualAdjustments = {};
  trackingStartTimestamp = null;
  language = "en";
  currency = "USD";
  rushMusic = null;
  displayedEarningsValue = 0;
  setActiveRange("day");
  applyPreferencesToControls();
  applyLanguage();
  elements.profileForm.reset();
  elements.setupForm.reset();
  closeQuickBonusForm();
  setDefaultDates();
  prefillFirstSetup();
  elements.backupMessage.textContent = "";
  showSetup();
  renderEverything();
}

function exportAppData() {
  normalizeState();

  const payload = {
    app: "earnings-tracker",
    version: 1,
    exportedAt: new Date().toISOString(),
    data: {
      profile,
      timeOffRecords,
      bonusRecords,
      workSessions,
      manualAdjustments,
      trackingStartTimestamp,
      language,
      currency,
      rushBest: getRushBestScore(),
      rushMusicMuted: rushMusic ? rushMusic.muted : readStorage(RUSH_MUSIC_MUTED_KEY, false) === true
    }
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `earnings-tracker-backup-${formatDateKey(new Date())}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showBackupMessage(t("exportSuccess"), false);
}

function importAppData(event) {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result || ""));
      const result = validateImportPayload(parsed);

      if (!result.ok) {
        showBackupMessage(t("importError"), true);
        return;
      }

      applyImportedData(result.data);
      showBackupMessage(t("importSuccess"), false);
    } catch (error) {
      showBackupMessage(t("importError"), true);
    } finally {
      elements.importDataFile.value = "";
    }
  });
  reader.addEventListener("error", () => {
    elements.importDataFile.value = "";
    showBackupMessage(t("importReadError"), true);
  });
  reader.readAsText(file);
}

function validateImportPayload(payload) {
  const data = payload && typeof payload === "object" && payload.data && typeof payload.data === "object"
    ? payload.data
    : payload;

  if (!data || typeof data !== "object") return { ok: false };

  const importedProfile = data.profile === null || data.profile === undefined ? null : normalizeProfile(data.profile);
  if (data.profile && !importedProfile) return { ok: false };

  const importedTimeOff = Array.isArray(data.timeOffRecords) ? data.timeOffRecords.filter(isValidTimeOffRecord) : [];
  const importedBonuses = Array.isArray(data.bonusRecords) ? data.bonusRecords.filter(isValidBonusRecord).map(normalizeBonusRecord) : [];
  const previousProfile = profile;
  let importedSessions = [];
  profile = importedProfile;
  try {
    importedSessions = normalizeWorkSessions(Array.isArray(data.workSessions) ? data.workSessions : []);
  } finally {
    profile = previousProfile;
  }
  const importedAdjustments = normalizeManualAdjustments(data.manualAdjustments || {});
  const importedTrackingStart = isValidDateTime(data.trackingStartTimestamp) ? data.trackingStartTimestamp : null;
  const importedLanguage = TRANSLATIONS[data.language] ? data.language : "en";
  const importedCurrency = ["USD", "RMB"].includes(data.currency) ? data.currency : "USD";
  const importedRushBest = Math.max(0, Math.floor(Number(data.rushBest) || 0));
  const importedRushMusicMuted = data.rushMusicMuted === true;

  return {
    ok: true,
    data: {
      profile: importedProfile,
      timeOffRecords: importedTimeOff,
      bonusRecords: importedBonuses,
      workSessions: importedSessions,
      manualAdjustments: importedAdjustments,
      trackingStartTimestamp: importedTrackingStart,
      language: importedLanguage,
      currency: importedCurrency,
      rushBest: importedRushBest,
      rushMusicMuted: importedRushMusicMuted
    }
  };
}

function applyImportedData(data) {
  profile = data.profile;
  timeOffRecords = data.timeOffRecords;
  bonusRecords = data.bonusRecords;
  workSessions = data.workSessions;
  manualAdjustments = data.manualAdjustments;
  trackingStartTimestamp = data.trackingStartTimestamp;
  language = data.language;
  currency = data.currency;
  writeStorage(RUSH_BEST_KEY, data.rushBest || 0);
  writeStorage(RUSH_MUSIC_MUTED_KEY, data.rushMusicMuted === true);
  if (rushMusic) {
    rushMusic.muted = data.rushMusicMuted === true;
    rushMusic.audio.muted = rushMusic.muted;
    updateRushMusicButton();
  }
  if (rushGame) {
    rushGame.best = data.rushBest || 0;
    updateRushHud();
  }
  normalizeState();

  writeStorage(STORAGE_KEYS.profile, profile);
  writeStorage(STORAGE_KEYS.timeOff, timeOffRecords);
  writeStorage(STORAGE_KEYS.bonuses, bonusRecords);
  writeStorage(STORAGE_KEYS.workSessions, workSessions);
  persistManualAdjustments();

  if (trackingStartTimestamp) {
    writeStorage(STORAGE_KEYS.trackingStart, trackingStartTimestamp);
  } else {
    localStorage.removeItem(STORAGE_KEYS.trackingStart);
  }

  writeStorage(STORAGE_KEYS.language, language);
  writeStorage(STORAGE_KEYS.currency, currency);
  applyPreferencesToControls();
  applyLanguage();
  closeQuickBonusForm();
  setDefaultDates();

  if (profile) {
    showApp();
    fillProfileForms();
  } else {
    showSetup();
    prefillFirstSetup();
  }

  renderEverything();
}

function showBackupMessage(message, isError) {
  elements.backupMessage.textContent = message;
  elements.backupMessage.classList.toggle("form-error", isError);
  elements.backupMessage.classList.toggle("success-message", !isError);
}

function normalizeProfile(value) {
  if (!value || typeof value !== "object") return null;

  const hourlyWage = Number(value.hourlyWage);
  const hoursPerDay = Number(value.hoursPerDay);
  const overtimeAfter = Number.isFinite(Number(value.overtimeAfter)) ? Number(value.overtimeAfter) : hoursPerDay;
  const overtimeMultiplier = Number.isFinite(Number(value.overtimeMultiplier)) ? Number(value.overtimeMultiplier) : 1.5;
  const startTime = typeof value.startTime === "string" ? value.startTime : "";
  const workdays = Array.isArray(value.workdays)
    ? value.workdays.map(Number).filter((day) => Number.isInteger(day) && day >= 0 && day <= 6)
    : [];

  if (!Number.isFinite(hourlyWage) || hourlyWage <= 0) return null;
  if (!Number.isFinite(hoursPerDay) || hoursPerDay <= 0 || hoursPerDay > 24) return null;
  if (!Number.isFinite(overtimeAfter) || overtimeAfter < 0 || overtimeAfter > 24) return null;
  if (!Number.isFinite(overtimeMultiplier) || overtimeMultiplier < 1) return null;
  if (!isValidClockTime(startTime)) return null;
  if (!workdays.length) return null;

  return {
    hourlyWage: roundMoney(hourlyWage),
    hoursPerDay,
    overtimeAfter,
    overtimeMultiplier,
    startTime,
    workdays: [...new Set(workdays)].sort((a, b) => a - b),
    updatedAt: isValidDateTime(value.updatedAt) ? value.updatedAt : new Date().toISOString()
  };
}

function isValidTimeOffRecord(record) {
  return Boolean(record && typeof record === "object" && isValidDateKey(record.date));
}

function isValidBonusRecord(record) {
  return Boolean(record && typeof record === "object" && isValidDateKey(record.date) && Number(record.amount) > 0);
}

function normalizeBonusRecord(record) {
  return {
    id: record.id || makeId(),
    date: record.date,
    amount: roundMoney(Number(record.amount)),
    type: normalizeBonusType(record.type),
    note: typeof record.note === "string" ? record.note.slice(0, 80) : ""
  };
}

function normalizeManualAdjustments(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.entries(value).reduce((clean, [dateKey, adjustment]) => {
    if (!isValidDateKey(dateKey) || !adjustment || typeof adjustment !== "object") return clean;

    const hours = Number(adjustment.hours);
    const minutes = Number(adjustment.minutes);
    const totalHours = hours + minutes / 60;

    if (!Number.isInteger(hours) || !Number.isInteger(minutes) || hours < 0 || minutes < 0 || minutes > 59 || totalHours > 24) {
      return clean;
    }

    clean[dateKey] = {
      hours,
      minutes,
      totalHours: roundHours(totalHours),
      savedAt: isValidDateTime(adjustment.savedAt) ? adjustment.savedAt : new Date().toISOString()
    };
    return clean;
  }, {});
}

function normalizeWorkSessions(value) {
  if (!Array.isArray(value)) return [];

  return value.reduce((sessions, session) => {
    if (!session || typeof session !== "object" || !isValidDateKey(session.date) || !Array.isArray(session.segments)) {
      return sessions;
    }

    const endedAt = isValidDateTime(session.endedAt) ? new Date(session.endedAt) : null;
    const segments = normalizeSegments(session.segments, endedAt);

    if (!segments.length) return sessions;

    const rawHours = getNormalizedSegmentHours(session.date, segments);

    sessions.push({
      date: session.date,
      endedAt: endedAt ? endedAt.toISOString() : "",
      overtimeApproved: Boolean(session.overtimeApproved) && (!profile || rawHours >= getRegularHoursLimit()),
      segments
    });
    return sessions;
  }, []).sort((a, b) => a.date.localeCompare(b.date));
}

function normalizeSegments(segments, endedAt) {
  const cleaned = segments
    .map((segment) => {
      const start = new Date(segment.startTimestamp);
      const rawEnd = segment.endTimestamp ? new Date(segment.endTimestamp) : endedAt;

      if (Number.isNaN(start.getTime())) return null;
      if (rawEnd && (Number.isNaN(rawEnd.getTime()) || rawEnd <= start)) return null;

      return {
        id: segment.id || makeId(),
        startTimestamp: start.toISOString(),
        endTimestamp: rawEnd ? rawEnd.toISOString() : null
      };
    })
    .filter(Boolean)
    .sort((first, second) => new Date(first.startTimestamp) - new Date(second.startTimestamp));

  const lastOpenIndex = cleaned.map((segment) => !segment.endTimestamp).lastIndexOf(true);
  return cleaned.filter((segment, index) => segment.endTimestamp || index === lastOpenIndex);
}

function getNormalizedSegmentHours(dateKey, segments) {
  const now = new Date();
  const todayKey = formatDateKey(now);
  const dayEnd = addDays(parseDateKey(dateKey), 1);
  const intervals = segments.map((segment) => {
    const start = new Date(segment.startTimestamp);
    const end = segment.endTimestamp
      ? new Date(segment.endTimestamp)
      : dateKey === todayKey
        ? now
        : dayEnd;
    return [start, end];
  });

  return getMergedIntervalMilliseconds(intervals) / (60 * 60 * 1000);
}

function isValidDateKey(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = parseDateKey(value);
  return formatDateKey(date) === value;
}

function isValidDateTime(value) {
  if (!value || typeof value !== "string") return false;
  return !Number.isNaN(new Date(value).getTime());
}

function isValidClockTime(value) {
  if (typeof value !== "string" || !/^\d{2}:\d{2}$/.test(value)) return false;

  const [hours, minutes] = value.split(":").map(Number);
  return Number.isInteger(hours) && Number.isInteger(minutes) && hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
}

function showUndo(undoCallback) {
  if (undoTimer) window.clearTimeout(undoTimer);

  pendingUndo = undoCallback;
  elements.undoMessage.textContent = t("actionCompleted");
  elements.undoToast.classList.remove("hidden");

  undoTimer = window.setTimeout(() => {
    pendingUndo = null;
    elements.undoToast.classList.add("hidden");
  }, 5000);
}

function undoLastAction() {
  if (!pendingUndo) return;

  const undo = pendingUndo;
  pendingUndo = null;

  if (undoTimer) {
    window.clearTimeout(undoTimer);
    undoTimer = null;
  }

  elements.undoToast.classList.add("hidden");
  undo();
}

function renderEverything() {
  renderLiveDashboard();
  renderDashboardControls();
  renderTimeOffTable();
  renderBonusTable();
  renderHistory();
}

function updateMainEarnings(targetValue, options = {}) {
  const target = roundMoney(targetValue);
  const start = displayedEarningsValue;
  const difference = target - start;
  const shouldAnimate = !options.immediate && Math.abs(difference) >= 0.01;

  if (earningsAnimationFrame) {
    window.cancelAnimationFrame(earningsAnimationFrame);
    earningsAnimationFrame = null;
  }

  if (!shouldAnimate) {
    displayedEarningsValue = target;
    elements.totalEarnings.textContent = formatMoney(target);
    return;
  }

  const duration = 320;
  const startedAt = performance.now();

  function animateFrame(now) {
    const elapsed = now - startedAt;
    const progress = Math.min(1, elapsed / duration);
    const easedProgress = easeOutCubic(progress);
    const nextValue = start + difference * easedProgress;

    displayedEarningsValue = nextValue;
    elements.totalEarnings.textContent = formatMoney(nextValue);

    if (progress < 1) {
      earningsAnimationFrame = window.requestAnimationFrame(animateFrame);
      return;
    }

    displayedEarningsValue = target;
    elements.totalEarnings.textContent = formatMoney(target);
    earningsAnimationFrame = null;
  }

  earningsAnimationFrame = window.requestAnimationFrame(animateFrame);
}

function easeOutCubic(progress) {
  return 1 - Math.pow(1 - progress, 3);
}

function renderLiveDashboard() {
  const now = new Date();
  elements.sidebarClock.textContent = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });

  if (!profile) {
    updateMainEarnings(0, { immediate: true });
    elements.totalEarnings.classList.remove("overtime-active");
    elements.workStatus.textContent = t("beforeShift");
    elements.workStatus.dataset.status = "before";
    elements.workStatus.title = t("statusBeforeTooltip");
    elements.rateBreakdown.dataset.mode = "normal";
    elements.earningsPerSecond.textContent = formatRatePerSecond(0);
    elements.earningsPerSecond.title = t("earningsTooltip");
    elements.rateBreakdown.title = t("earningsTooltip");
    elements.rateBreakdown.textContent = formatHourlyRateLine(0);
    elements.dashboardEmptyHint.textContent = "";
    elements.baseIncome.textContent = formatMoney(0);
    elements.overtimeIncome.textContent = formatMoney(0);
    elements.bonusIncome.textContent = formatMoney(0);
    elements.hoursCounted.textContent = "0.00";
    elements.overtimeHours.textContent = "0.00";
    elements.dateRange.textContent = "--";
    elements.dashboardStatus.textContent = t("noProfile");
    renderTodayDetails(null, now);
    renderRangeAnalytics(now);
    return;
  }

  const summary = getRangeSummary(activeRange, now);
  const todaySummary = summarizeDateRange(startOfDay(now), startOfDay(now), now);
  syncEndDaySummary(now);
  elements.rangeLabel.textContent = summary.label;
  updateMainEarnings(summary.total);
  elements.totalEarnings.classList.toggle("overtime-active", todaySummary.overtimeHours > 0);
  elements.earningsPerSecond.textContent = formatRatePerSecond(getCurrentEarningsRate(todaySummary));
  elements.earningsPerSecond.title = t("earningsTooltip");
  elements.rateBreakdown.title = t("earningsTooltip");
  renderRateBreakdown(todaySummary);
  elements.baseIncome.textContent = formatMoney(summary.base);
  elements.overtimeIncome.textContent = formatMoney(summary.overtime);
  elements.bonusIncome.textContent = formatMoney(summary.bonus);
  elements.hoursCounted.textContent = summary.hours.toFixed(2);
  elements.overtimeHours.textContent = summary.overtimeHours.toFixed(2);
  elements.dateRange.textContent = summary.rangeText;
  elements.dashboardStatus.textContent = summary.statusText;
  renderWorkStatus(todaySummary);
  renderDashboardEmptyHint(todaySummary, now);
  renderTodayDetails(todaySummary, now);
  renderRangeAnalytics(now);
}

function renderDashboardControls() {
  if (!profile) {
    elements.startWorkButton.disabled = true;
    elements.pauseWorkButton.disabled = true;
    elements.resumeWorkButton.disabled = true;
    elements.startOvertimeButton.disabled = true;
    elements.retroOvertimeButton.disabled = true;
    elements.endWorkButton.disabled = true;
    elements.resetTodayButton.disabled = true;
    hideRetroOvertimeForm();
    return;
  }

  const now = new Date();
  const todayKey = formatDateKey(now);
  const todaySession = getWorkSessionForDate(todayKey);
  const openSegment = getOpenManualSegment(todaySession);
  const adjustment = getManualAdjustmentForDate(todayKey);
  const hasAdjustment = Boolean(adjustment);
  const isEnded = isSessionEnded(todaySession);
  const isPaused = isSessionPaused(todaySession);
  const canPauseAutomatic = !openSegment && !isEnded && !isPaused && isScheduledWorkday(now) && !isTimeOffDate(todayKey) && getWorkedHoursSoFar(now) > 0;
  const hasApprovedOvertime = Boolean(todaySession && todaySession.overtimeApproved);
  const regularLimit = getRegularHoursLimit();
  const rawSessionHours = getManualWorkedHoursForDate(todayKey, now, null, { ignoreOvertimeCap: true });
  const rawAutomaticHours = todaySession || !isScheduledWorkday(now) || isTimeOffDate(todayKey)
    ? 0
    : getWorkedHoursSoFar(now, { allowOvertime: false });
  const automaticRegularShiftEnded = !todaySession && hasAutomaticRegularShiftEnded(now, todayKey);
  const sessionRegularShiftEnded = todaySession && rawSessionHours > 0 && hasAutomaticRegularShiftEnded(now, todayKey);
  const isRegularShiftEnded = Math.max(rawSessionHours, rawAutomaticHours) >= regularLimit || sessionRegularShiftEnded;
  const canUseOvertimeRecovery = canShowRetroOvertimeOption(todayKey, now, todaySession);

  elements.startWorkButton.disabled = hasAdjustment || isEnded || isPaused || Boolean(openSegment) || automaticRegularShiftEnded;
  elements.pauseWorkButton.disabled = hasAdjustment || isEnded || (!hasApprovedOvertime && isRegularShiftEnded) || (!openSegment && !canPauseAutomatic);
  elements.resumeWorkButton.disabled = hasAdjustment || !isPaused || (!hasApprovedOvertime && isRegularShiftEnded);
  elements.startOvertimeButton.disabled = hasAdjustment || isEnded || hasApprovedOvertime || !canUseOvertimeRecovery;
  elements.retroOvertimeButton.disabled = hasAdjustment || hasApprovedOvertime || !canUseOvertimeRecovery;
  elements.endWorkButton.disabled = hasAdjustment || isEnded || (!openSegment && !isPaused && !canPauseAutomatic);
  elements.resetTodayButton.disabled = false;

  if (elements.retroOvertimeForm.classList.contains("hidden") === false && !canUseOvertimeRecovery) {
    hideRetroOvertimeForm();
  }

  if (adjustment && document.activeElement !== elements.adjustHours && document.activeElement !== elements.adjustMinutes) {
    elements.adjustHours.value = adjustment.hours;
    elements.adjustMinutes.value = adjustment.minutes;
  }
}

function renderWorkStatus(todaySummary) {
  const status = getTodayWorkStatus(todaySummary);
  elements.workStatus.textContent = t(status.translationKey);
  elements.workStatus.dataset.status = status.name;
  elements.workStatus.title = t(status.tooltipKey);
}

function renderDashboardEmptyHint(todaySummary, now) {
  if (!todaySummary) {
    elements.dashboardEmptyHint.textContent = "";
    return;
  }

  const statuses = Array.from(todaySummary.statuses);
  const status = statuses[0] || "";

  if (status === "scheduled") {
    const shiftStart = getAutomaticShiftStart(now);
    elements.dashboardEmptyHint.textContent = t("beforeShiftEmpty", {
      time: shiftStart ? formatClockTime(shiftStart) : "--"
    });
    return;
  }

  if (status === "non-workday") {
    elements.dashboardEmptyHint.textContent = t("nonWorkdayEmpty");
    return;
  }

  elements.dashboardEmptyHint.textContent = "";
}

function renderRateBreakdown(todaySummary) {
  const todaySession = getWorkSessionForDate(formatDateKey(new Date()));
  const isApprovedOvertime = todaySession && todaySession.overtimeApproved && getOpenManualSegment(todaySession);
  const isOvertime = todaySummary && (todaySummary.overtimeHours > 0 || isApprovedOvertime);
  const baseRate = Number(profile.hourlyWage) || 0;
  const overtimeRate = baseRate * getOvertimeMultiplier();

  elements.rateBreakdown.dataset.mode = isOvertime ? "overtime" : "normal";

  if (isOvertime) {
    elements.rateBreakdown.innerHTML = `
      <span>${escapeHtml(t("baseRateLabel"))}: ${escapeHtml(formatHourlyRateLine(baseRate))}</span>
      <span>${escapeHtml(t("overtimeRateLabel"))}: ${escapeHtml(formatHourlyRateLine(overtimeRate))}</span>
    `;
    return;
  }

  elements.rateBreakdown.textContent = formatHourlyRateLine(baseRate);
}

function renderRangeAnalytics(now) {
  if (!profile) {
    elements.rangeAnalytics.classList.add("hidden");
    return;
  }

  elements.rangeAnalytics.classList.remove("hidden");
  elements.streakCount.textContent = `${t("streak")}: ${calculateStreak(now)} ${t("days")}`;

  if (activeRange === "week") {
    const start = startOfWeek(now);
    const end = startOfDay(now);
    const days = datesBetween(start, end).map((date) => {
      const day = getDayEarnings(date, now, { allowPartialToday: true });
      return {
        label: DAY_NAMES[date.getDay()],
        total: day.total,
        day
      };
    });
    renderAnalyticsSummary(days.map((item) => item.day));
    renderTrend(t("weeklyTrend"), days);
    elements.analyticsTitle.textContent = t("weeklyTrend");
    return;
  }

  if (activeRange === "month") {
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const buckets = getMonthWeekBuckets(monthStart, now);
    renderAnalyticsSummary(buckets.flatMap((bucket) => bucket.days));
    renderTrend(t("monthlyTrend"), buckets.map((bucket, index) => ({
      label: `${t("weekLabel")} ${index + 1}`,
      total: bucket.days.reduce((sum, day) => sum + day.total, 0)
    })));
    elements.analyticsTitle.textContent = t("monthlyTrend");
    return;
  }

  elements.analyticsTitle.textContent = t("analyticsMomentum");
  elements.analyticsSummaryCards.innerHTML = "";
  elements.trendPanel.classList.add("hidden");
}

function renderAnalyticsSummary(days) {
  const totals = days.reduce((summary, day) => {
    const regularHours = Math.max(0, day.hours - day.overtimeHours);
    summary.workDays += day.hours > 0 ? 1 : 0;
    summary.regularHours += regularHours;
    summary.overtimeHours += day.overtimeHours;
    summary.earnings += day.total;
    summary.bonus += day.bonus;
    return summary;
  }, {
    workDays: 0,
    regularHours: 0,
    overtimeHours: 0,
    earnings: 0,
    bonus: 0
  });

  const cards = [
    [t("totalWorkDays"), totals.workDays],
    [t("totalRegularHours"), formatHours(totals.regularHours)],
    [t("totalOvertimeHours"), formatHours(totals.overtimeHours)],
    [t("totalEarningsLabel"), formatMoney(totals.earnings)],
    [t("totalBonusLabel"), formatMoney(totals.bonus)]
  ];

  elements.analyticsSummaryCards.innerHTML = cards.map(([label, value]) => `
    <div class="summary-card">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");
}

function renderTrend(title, items) {
  const maxTotal = Math.max(...items.map((item) => item.total), 1);
  elements.trendPanel.classList.remove("hidden");
  elements.trendTitle.textContent = title;
  elements.trendRows.innerHTML = items.map((item) => {
    const percent = Math.max(4, (item.total / maxTotal) * 100);
    return `
      <div class="trend-row">
        <span>${escapeHtml(item.label)}</span>
        <div class="trend-track"><div class="trend-fill" style="width: ${percent}%"></div></div>
        <strong>${escapeHtml(formatMoney(item.total))}</strong>
      </div>
    `;
  }).join("");
}

function getMonthWeekBuckets(monthStart, now) {
  const buckets = [];
  let cursor = startOfDay(monthStart);
  const monthEnd = minDate(new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0), startOfDay(now));

  while (cursor <= monthEnd) {
    const bucketEnd = minDate(addDays(cursor, 6), monthEnd);
    buckets.push({
      start: cursor,
      end: bucketEnd,
      days: datesBetween(cursor, bucketEnd).map((date) => getDayEarnings(date, now, { allowPartialToday: true }))
    });
    cursor = addDays(bucketEnd, 1);
  }

  return buckets;
}

function renderTodayDetails(todaySummary, now) {
  if (!profile || !todaySummary) {
    setTodayDetails({
      progressPercent: 0,
      startText: "--",
      endText: "--",
      normalText: `${formatHours(0)} / ${formatMoney(0)}`,
      elapsedText: formatDurationShort(0),
      remainingText: formatDurationShort(0),
      overtimeText: `${formatHours(0)} / ${formatMoney(0)}`,
      bonusText: formatMoney(0),
      totalText: formatMoney(0),
      workedHours: 0,
      bonus: 0
    });
    return;
  }

  const todayKey = formatDateKey(now);
  const todayDay = getDayEarnings(startOfDay(now), now, { allowPartialToday: true });
  const pay = calculatePayForHours(todayDay.hours);
  const normalHours = Math.max(0, todayDay.hours - pay.overtimeHours);
  const regularLimit = getRegularHoursLimit();
  const remainingHours = Math.max(0, regularLimit - todayDay.hours);
  const progressPercent = regularLimit > 0
    ? Math.min(100, (Math.min(todayDay.hours, regularLimit) / regularLimit) * 100)
    : 0;
  const timeline = getTodayTimelineText(todayKey, now);

  setTodayDetails({
    progressPercent,
    startText: timeline.start,
    endText: timeline.end,
    normalText: `${formatHours(normalHours)} / ${formatMoney(todayDay.base)}`,
    elapsedText: formatDurationShort(todayDay.hours),
    remainingText: formatDurationShort(remainingHours),
    overtimeText: `${formatHours(todayDay.overtimeHours)} / ${formatMoney(todayDay.overtime)}`,
    bonusText: formatMoney(todayDay.bonus),
    totalText: formatMoney(todayDay.total),
    workedHours: todayDay.hours,
    bonus: todayDay.bonus
  });
}

function setTodayDetails(details) {
  elements.todayProgressPercent.textContent = `${Math.round(details.progressPercent)}%`;
  elements.todayProgressFill.style.width = `${Math.min(100, Math.max(0, details.progressPercent))}%`;
  elements.breakdownStart.textContent = details.startText;
  elements.breakdownEnd.textContent = details.endText;
  elements.breakdownNormal.textContent = details.normalText;
  elements.breakdownElapsed.textContent = details.elapsedText;
  elements.breakdownRemaining.textContent = details.remainingText;
  elements.breakdownOvertime.textContent = details.overtimeText;
  elements.breakdownBonus.textContent = details.bonusText;
  elements.breakdownTotal.textContent = details.totalText;
  renderCalculationExplanation(details);
}

function renderCalculationExplanation(details) {
  if (!elements.calculationExplanation) return;

  const hourlyRate = profile ? formatMoney(profile.hourlyWage) : formatMoney(0);
  const overtimeLimit = profile ? getOvertimeThreshold() : 0;
  const multiplier = profile ? getOvertimeMultiplier() : 1;
  const rows = [
    t("explanationHourlyRate", { rate: hourlyRate }),
    t("explanationWorkedTime", { hours: formatHours(details.workedHours || 0) }),
    t("explanationOvertime", { hours: formatHours(overtimeLimit), multiplier }),
    t("explanationBonus", { bonus: formatMoney(details.bonus || 0) })
  ];

  elements.calculationExplanation.innerHTML = rows
    .map((row) => `<li>${escapeHtml(row)}</li>`)
    .join("");
}

function renderEndDaySummary(todayKey, now) {
  const day = getDayEarnings(parseDateKey(todayKey), now, { allowPartialToday: true });
  const regularHours = Math.max(0, day.hours - day.overtimeHours);
  const earnedToday = roundMoney(day.base + day.overtime);

  elements.endDaySummary.classList.remove("hidden");
  elements.endDaySummary.innerHTML = `
    <strong>${escapeHtml(t("endDaySummaryTitle"))}</strong>
    <span>${escapeHtml(t("regularHoursLabel"))}: ${escapeHtml(formatHours(regularHours))}</span>
    <span>${escapeHtml(t("overtimeHoursLabel"))}: ${escapeHtml(formatHours(day.overtimeHours))}</span>
    <span>${escapeHtml(t("earnedTodayLabel"))}: ${escapeHtml(formatMoney(earnedToday))}</span>
    <span>${escapeHtml(t("bonusTodayLabel"))}: ${escapeHtml(formatMoney(day.bonus))}</span>
    <span>${escapeHtml(t("finalTotalLabel"))}: ${escapeHtml(formatMoney(day.total))}</span>
  `;
}

function syncEndDaySummary(now) {
  const todaySession = getWorkSessionForDate(formatDateKey(now));

  if (!isSessionEnded(todaySession)) {
    elements.endDaySummary.classList.add("hidden");
  }
}

function triggerCelebration() {
  const card = document.querySelector(".earnings-display");
  if (!card) return;

  const colors = ["#34c6ac", "#e0b64b", "#c74338", "#a98ee5", "#f4f1e9"];

  for (let index = 0; index < 22; index += 1) {
    const piece = document.createElement("span");
    const angle = -150 + Math.random() * 120;
    const distance = 80 + Math.random() * 130;
    const x = Math.cos((angle * Math.PI) / 180) * distance;
    const y = Math.sin((angle * Math.PI) / 180) * distance;

    piece.className = "confetti-piece";
    piece.style.setProperty("--x", `${x}px`);
    piece.style.setProperty("--y", `${y}px`);
    piece.style.setProperty("--r", `${Math.random() * 360}deg`);
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * 120}ms`;
    card.appendChild(piece);

    window.setTimeout(() => piece.remove(), 1300);
  }
}

function renderTimeOffTable() {
  if (timeOffRecords.length === 0) {
    elements.timeOffTable.innerHTML = emptyRow(language === "zh" ? "暂无休假记录。" : "No time off records yet.", 3);
    return;
  }

  elements.timeOffTable.innerHTML = timeOffRecords.map((record) => `
    <tr>
      <td>${escapeHtml(formatDisplayDate(record.date))}</td>
      <td>${escapeHtml(record.note || "No note")}</td>
      <td><button class="row-action" type="button" data-delete-timeoff="${record.id}">${escapeHtml(language === "zh" ? "移除" : "Remove")}</button></td>
    </tr>
  `).join("");

  elements.timeOffTable.querySelectorAll("[data-delete-timeoff]").forEach((button) => {
    button.addEventListener("click", () => {
      timeOffRecords = timeOffRecords.filter((record) => record.id !== button.dataset.deleteTimeoff);
      writeStorage(STORAGE_KEYS.timeOff, timeOffRecords);
      renderEverything();
    });
  });
}

function renderBonusTable() {
  if (bonusRecords.length === 0) {
    elements.bonusTable.innerHTML = emptyRow(t("bonusEmpty"), 5);
    return;
  }

  elements.bonusTable.innerHTML = bonusRecords.map((record) => `
    <tr>
      <td>${escapeHtml(formatDisplayDate(record.date))}</td>
      <td>${escapeHtml(formatMoney(record.amount))}</td>
      <td>${escapeHtml(formatBonusType(record.type))}</td>
      <td>${escapeHtml(record.note || "No note")}</td>
      <td><button class="row-action" type="button" data-delete-bonus="${record.id}">${escapeHtml(language === "zh" ? "移除" : "Remove")}</button></td>
    </tr>
  `).join("");

  elements.bonusTable.querySelectorAll("[data-delete-bonus]").forEach((button) => {
    button.addEventListener("click", () => {
      bonusRecords = bonusRecords.filter((record) => record.id !== button.dataset.deleteBonus);
      writeStorage(STORAGE_KEYS.bonuses, bonusRecords);
      renderEverything();
    });
  });
}

function renderHistory() {
  const trackingStart = getTrackingStartDateTime();

  if (!profile || !trackingStart) {
    showHistoryEmptyState(t("historyEmpty"));
    return;
  }

  elements.historyEmptyState.classList.add("hidden");
  const filter = syncHistoryDateFilter(trackingStart, new Date());
  renderDailyHistory(filter.start, filter.end, trackingStart);
  renderWeeklyHistory(filter.start, filter.end, trackingStart);
  renderMonthlyHistory(filter.start, filter.end, trackingStart);
  renderYearlyHistory(filter.start, filter.end, trackingStart);
}

function renderDailyHistory(filterStart, filterEnd, trackingStart) {
  const rows = [];

  for (const date of datesBetween(filterStart, filterEnd)) {
    const day = getHistoryDayEarnings(date, new Date(), trackingStart);
    rows.push(`
      <tr>
        <td>${escapeHtml(formatDisplayDate(day.dateKey))}</td>
        <td>${escapeHtml(formatMoney(day.base))}</td>
        <td>${escapeHtml(formatMoney(day.bonus))}</td>
        <td>${escapeHtml(getBonusTypesForDate(day.dateKey))}</td>
        <td>${escapeHtml(formatMoney(day.total))}</td>
        <td>${escapeHtml(formatHistoryStatus(day.status))}</td>
      </tr>
    `);
  }

  elements.dailyHistoryTable.innerHTML = rows.length ? rows.join("") : emptyRow(t("historyRangeEmpty"), 6);
}

function renderWeeklyHistory(filterStart, filterEnd, trackingStart) {
  const start = startOfWeek(filterStart);
  const end = minDate(endOfWeek(filterEnd), startOfDay(new Date()));
  const rows = [];

  for (let cursor = new Date(start); cursor <= end; cursor = addDays(cursor, 7)) {
    const weekStart = new Date(cursor);
    const weekEnd = minDate(endOfWeek(weekStart), end);
    const overlapStart = maxDate(weekStart, filterStart);
    const overlapEnd = minDate(weekEnd, filterEnd);
    const summary = summarizeHistoryDateRange(overlapStart, overlapEnd, new Date(), trackingStart);

    if (!summary) continue;

    rows.push(`
      <tr>
        <td>${escapeHtml(formatShortDate(summary.start))} - ${escapeHtml(formatShortDate(summary.end))}</td>
        <td>${escapeHtml(formatMoney(summary.base))}</td>
        <td>${escapeHtml(formatMoney(summary.bonus))}</td>
        <td>${escapeHtml(formatMoney(summary.total))}</td>
      </tr>
    `);
  }

  elements.weeklyHistoryTable.innerHTML = rows.length ? rows.join("") : emptyRow(t("historyRangeEmpty"), 4);
}

function renderMonthlyHistory(filterStart, filterEnd, trackingStart) {
  const rows = [];
  const activeYears = getYearsInDateSpan(filterStart, filterEnd);

  activeYears.forEach((year) => {
    const startMonth = year === filterStart.getFullYear() ? filterStart.getMonth() : 0;
    const endMonth = year === filterEnd.getFullYear() ? filterEnd.getMonth() : 11;
    for (let month = startMonth; month <= endMonth; month += 1) {
      const monthStart = new Date(year, month, 1);
      const monthEnd = new Date(year, month + 1, 0);
      const overlapStart = maxDate(monthStart, filterStart);
      const overlapEnd = minDate(monthEnd, filterEnd);
      const summary = summarizeHistoryDateRange(overlapStart, overlapEnd, new Date(), trackingStart);

      if (!summary) continue;

      rows.push(`
        <tr>
          <td>${escapeHtml(monthStart.toLocaleDateString([], { month: "long", year: "numeric" }))}</td>
          <td>${escapeHtml(formatMoney(summary.base))}</td>
          <td>${escapeHtml(formatMoney(summary.bonus))}</td>
          <td>${escapeHtml(formatMoney(summary.total))}</td>
        </tr>
      `);
    }
  });

  elements.monthlyHistoryTable.innerHTML = rows.length ? rows.join("") : emptyRow(t("historyRangeEmpty"), 4);
}

function renderYearlyHistory(filterStart, filterEnd, trackingStart) {
  const rows = getYearsInDateSpan(filterStart, filterEnd).map((year) => {
    const yearStart = new Date(year, 0, 1);
    const yearEnd = new Date(year, 11, 31);
    const overlapStart = maxDate(yearStart, filterStart);
    const overlapEnd = minDate(yearEnd, filterEnd);
    const summary = summarizeHistoryDateRange(overlapStart, overlapEnd, new Date(), trackingStart);

    if (!summary) return "";

    return `
      <tr>
        <td>${year}</td>
        <td>${escapeHtml(formatMoney(summary.base))}</td>
        <td>${escapeHtml(formatMoney(summary.bonus))}</td>
        <td>${escapeHtml(formatMoney(summary.total))}</td>
      </tr>
    `;
  }).filter(Boolean);

  elements.yearlyHistoryTable.innerHTML = rows.length ? rows.join("") : emptyRow(t("historyRangeEmpty"), 4);
}

function getRangeSummary(range, now) {
  const today = startOfDay(now);
  let start = today;
  let end = today;
  let label = t("today");

  if (range === "week") {
    start = startOfWeek(now);
    label = language === "zh" ? "本周" : "This week";
  }

  if (range === "month") {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
    label = language === "zh" ? "本月" : "This month";
  }

  if (range === "year") {
    start = new Date(now.getFullYear(), 0, 1);
    label = language === "zh" ? "今年" : "This year";
  }

  const summary = summarizeDateRange(start, end, now);
  const rangeText = range === "day"
    ? formatDisplayDate(formatDateKey(now))
    : `${formatShortDate(start)} - ${formatShortDate(end)}`;

  return {
    ...summary,
    label,
    rangeText,
    statusText: getStatusText(range, summary)
  };
}

function summarizeDateRange(start, end, now) {
  const totals = {
    base: 0,
    overtime: 0,
    bonus: 0,
    total: 0,
    hours: 0,
    overtimeHours: 0,
    statuses: new Set()
  };

  for (const date of datesBetween(start, end)) {
    const day = getDayEarnings(date, now, { allowPartialToday: true });
    totals.base += day.base;
    totals.overtime += day.overtime;
    totals.bonus += day.bonus;
    totals.total += day.total;
    totals.hours += day.hours;
    totals.overtimeHours += day.overtimeHours;
    totals.statuses.add(day.status);
  }

  totals.base = roundMoney(totals.base);
  totals.overtime = roundMoney(totals.overtime);
  totals.bonus = roundMoney(totals.bonus);
  totals.total = roundMoney(totals.total);
  return totals;
}

function summarizeHistoryDateRange(start, end, now, trackingStart) {
  const historyStart = maxDate(startOfDay(start), startOfDay(trackingStart));
  const historyEnd = minDate(startOfDay(end), startOfDay(now));

  if (historyStart > historyEnd) return null;

  const totals = {
    start: historyStart,
    end: historyEnd,
    base: 0,
    overtime: 0,
    bonus: 0,
    total: 0,
    hours: 0,
    overtimeHours: 0
  };

  for (const date of datesBetween(historyStart, historyEnd)) {
    const day = getHistoryDayEarnings(date, now, trackingStart);
    totals.base += day.base;
    totals.overtime += day.overtime;
    totals.bonus += day.bonus;
    totals.total += day.total;
    totals.hours += day.hours;
    totals.overtimeHours += day.overtimeHours;
  }

  totals.base = roundMoney(totals.base);
  totals.overtime = roundMoney(totals.overtime);
  totals.bonus = roundMoney(totals.bonus);
  totals.total = roundMoney(totals.total);
  return totals;
}

function getDayEarnings(date, now, options = {}) {
  const dateKey = formatDateKey(date);
  const todayKey = formatDateKey(now);
  const bonus = getBonusForDate(dateKey);
  const isFuture = dateKey > todayKey;
  const manualAdjustment = getManualAdjustmentForDate(dateKey);
  const manualWorkedHours = getManualWorkedHoursForDate(dateKey, now);
  const manualSession = getWorkSessionForDate(dateKey);

  if (isFuture) {
    return makeDayResult(dateKey, 0, bonus, 0, "future date");
  }

  if (isTimeOffDate(dateKey)) {
    return makeDayResult(dateKey, 0, bonus, 0, "day off");
  }

  if (manualAdjustment) {
    return makeWorkedDayResult(dateKey, manualAdjustment.totalHours, bonus, "manual override");
  }

  if (manualSession && manualSession.segments.length) {
    const status = getSessionStatusForDate(manualSession, dateKey, todayKey);
    return makeSessionDayResult(dateKey, manualSession, now, null, bonus, status);
  }

  if (!isScheduledWorkday(date)) {
    return makeDayResult(dateKey, 0, bonus, 0, "non-workday");
  }

  if (dateKey < todayKey || !options.allowPartialToday) {
    return makeWorkedDayResult(dateKey, getRegularHoursLimit(), bonus, "worked");
  }

  const rawWorkedHours = getWorkedHoursSoFar(now, { allowOvertime: true });
  const workedHours = getWorkedHoursSoFar(now, { allowOvertime: false });
  const status = workedHours === 0
    ? "scheduled"
    : rawWorkedHours > workedHours
      ? "shift ended"
      : "working now";
  return makeWorkedDayResult(dateKey, workedHours, bonus, status);
}

function getHistoryDayEarnings(date, now, trackingStart) {
  const dateKey = formatDateKey(date);
  const trackingStartKey = formatDateKey(trackingStart);
  const todayKey = formatDateKey(now);
  const bonus = getBonusForDate(dateKey);
  const manualAdjustment = getManualAdjustmentForDate(dateKey);
  const manualWorkedHours = getManualWorkedHoursForDate(dateKey, now, trackingStart);
  const manualSession = getWorkSessionForDate(dateKey);

  if (dateKey < trackingStartKey || dateKey > todayKey) {
    return makeDayResult(dateKey, 0, bonus, 0, "future date");
  }

  if (isTimeOffDate(dateKey)) {
    return makeDayResult(dateKey, 0, bonus, 0, "day off");
  }

  if (manualAdjustment) {
    return makeWorkedDayResult(dateKey, manualAdjustment.totalHours, bonus, "manual override");
  }

  if (manualSession && manualSession.segments.length) {
    const status = getSessionStatusForDate(manualSession, dateKey, todayKey);
    return makeSessionDayResult(dateKey, manualSession, now, trackingStart, bonus, status);
  }

  if (!isScheduledWorkday(date)) {
    return makeDayResult(dateKey, 0, bonus, 0, "non-workday");
  }

  const [startHour, startMinute] = profile.startTime.split(":").map(Number);
  const workStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), startHour, startMinute, 0, 0);
  const workEnd = new Date(workStart.getTime() + getRegularHoursLimit() * 60 * 60 * 1000);
  const earningStart = maxDate(workStart, trackingStart);
  const earningEnd = dateKey === todayKey ? minDate(now, workEnd) : workEnd;
  const workedMilliseconds = Math.max(0, earningEnd - earningStart);
  const workedHours = Math.min(getRegularHoursLimit(), workedMilliseconds / (60 * 60 * 1000));
  const rawWorkedHours = dateKey === todayKey
    ? Math.max(0, now - earningStart) / (60 * 60 * 1000)
    : workedHours;
  const status = dateKey === todayKey && workedHours > 0
    ? rawWorkedHours > workedHours
      ? "shift ended"
      : "working now"
    : "worked";

  return makeWorkedDayResult(dateKey, workedHours, bonus, status);
}

function getManualAdjustmentForDate(dateKey) {
  const saved = manualAdjustments[dateKey];

  if (!saved || typeof saved !== "object") return null;

  const totalHours = Number(saved.totalHours);

  if (!Number.isFinite(totalHours) || totalHours < 0) return null;

  return {
    ...saved,
    totalHours: roundHours(totalHours)
  };
}

function getSessionStatusForDate(session, dateKey, todayKey) {
  if (dateKey !== todayKey) return "worked";
  if (isSessionEnded(session)) return "clocked out";
  const now = new Date();
  const rawHours = getManualWorkedHoursForDate(dateKey, now, null, { ignoreOvertimeCap: true });
  if (!session.overtimeApproved && (rawHours >= getRegularHoursLimit() || (rawHours > 0 && hasAutomaticRegularShiftEnded(now, dateKey)))) {
    return "shift ended";
  }
  if (getOpenManualSegment(session)) return "working now";
  return "paused";
}

function getManualWorkedHoursForDate(dateKey, now, clampStart = null, options = {}) {
  const session = getWorkSessionForDate(dateKey);

  if (!session || !session.segments.length) return 0;

  const intervals = getSessionIntervalsForDate(dateKey, session, now, clampStart);
  const workedHours = getMergedIntervalMilliseconds(intervals) / (60 * 60 * 1000);

  if (options.ignoreOvertimeCap || session.overtimeApproved) {
    return workedHours;
  }

  const regularEnd = getAutomaticRegularShiftEnd(parseDateKey(dateKey));
  const regularIntervals = regularEnd ? intersectIntervals(intervals, null, regularEnd) : intervals;
  const regularHours = getMergedIntervalMilliseconds(regularIntervals) / (60 * 60 * 1000);

  return Math.min(regularHours, getRegularHoursLimit());
}

function getSessionIntervalsForDate(dateKey, session, now, clampStart = null) {
  const dayStart = parseDateKey(dateKey);
  const dayEnd = addDays(dayStart, 1);
  const todayKey = formatDateKey(now);
  const intervals = [];

  session.segments.forEach((segment) => {
    if (!segment.startTimestamp) return;

    const segmentStart = new Date(segment.startTimestamp);

    if (Number.isNaN(segmentStart.getTime())) return;

    const rawEnd = segment.endTimestamp
      ? new Date(segment.endTimestamp)
      : dateKey === todayKey
        ? now
        : dayEnd;

    if (Number.isNaN(rawEnd.getTime())) return;

    const effectiveStart = maxDate(segmentStart, dayStart);
    const effectiveClampStart = clampStart ? maxDate(effectiveStart, clampStart) : effectiveStart;
    const effectiveEnd = minDate(rawEnd, dayEnd);

    if (effectiveEnd <= effectiveClampStart) return;
    intervals.push([effectiveClampStart, effectiveEnd]);
  });

  return intervals;
}

function intersectIntervals(intervals, rangeStart, rangeEnd) {
  return intervals.reduce((matches, [start, end]) => {
    const effectiveStart = rangeStart ? maxDate(start, rangeStart) : start;
    const effectiveEnd = rangeEnd ? minDate(end, rangeEnd) : end;

    if (effectiveEnd > effectiveStart) {
      matches.push([effectiveStart, effectiveEnd]);
    }

    return matches;
  }, []);
}

function getRegularCompletionTimeForSession(session, dateKey, now) {
  if (!session || !session.segments.length) return null;

  const regularMilliseconds = getRegularHoursLimit() * 60 * 60 * 1000;
  let accumulated = 0;
  const todayKey = formatDateKey(now);
  const dayEnd = addDays(parseDateKey(dateKey), 1);
  const intervals = [];

  session.segments.forEach((segment) => {
    const start = new Date(segment.startTimestamp);
    const end = segment.endTimestamp
      ? new Date(segment.endTimestamp)
      : dateKey === todayKey
        ? now
        : dayEnd;

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start) return;
    intervals.push([start, end]);
  });

  for (const [start, end] of mergeIntervals(intervals)) {
    const duration = end - start;

    if (accumulated + duration >= regularMilliseconds) {
      return new Date(start.getTime() + regularMilliseconds - accumulated);
    }

    accumulated += duration;
  }

  return null;
}

function trimSessionToRegularCompletion(session, dateKey, now) {
  const completionTime = getRegularCompletionTimeForSession(session, dateKey, now);

  if (!completionTime) return;

  session.segments = session.segments.reduce((segments, segment) => {
    const start = new Date(segment.startTimestamp);
    const end = segment.endTimestamp ? new Date(segment.endTimestamp) : now;

    if (Number.isNaN(start.getTime()) || start >= completionTime) return segments;

    const cappedEnd = Number.isNaN(end.getTime()) || end > completionTime ? completionTime : end;

    if (cappedEnd <= start) return segments;

    segments.push({
      ...segment,
      endTimestamp: cappedEnd.toISOString()
    });
    return segments;
  }, []);
}

function trimSessionToScheduledRegularEnd(session, dateKey) {
  const regularEnd = getAutomaticRegularShiftEnd(parseDateKey(dateKey));

  if (!regularEnd) return;

  session.segments = session.segments.reduce((segments, segment) => {
    const start = new Date(segment.startTimestamp);
    const end = segment.endTimestamp ? new Date(segment.endTimestamp) : regularEnd;

    if (Number.isNaN(start.getTime()) || start >= regularEnd) return segments;

    const cappedEnd = Number.isNaN(end.getTime()) || end > regularEnd ? regularEnd : end;

    if (cappedEnd <= start) return segments;

    segments.push({
      ...segment,
      endTimestamp: cappedEnd.toISOString()
    });
    return segments;
  }, []);
}

function getMergedIntervalMilliseconds(intervals) {
  return mergeIntervals(intervals).reduce((total, [start, end]) => total + Math.max(0, end - start), 0);
}

function mergeIntervals(intervals) {
  const sorted = intervals
    .filter(([start, end]) => start instanceof Date && end instanceof Date && !Number.isNaN(start.getTime()) && !Number.isNaN(end.getTime()) && end > start)
    .sort(([firstStart], [secondStart]) => firstStart - secondStart);
  const merged = [];

  sorted.forEach(([start, end]) => {
    const last = merged[merged.length - 1];

    if (!last || start > last[1]) {
      merged.push([start, end]);
      return;
    }

    if (end > last[1]) {
      last[1] = end;
    }
  });

  return merged;
}

function makeDayResult(dateKey, base, bonus, hours, status) {
  const roundedBase = roundMoney(base);
  const roundedBonus = roundMoney(bonus);

  return {
    dateKey,
    base: roundedBase,
    overtime: 0,
    bonus: roundedBonus,
    total: roundMoney(roundedBase + roundedBonus),
    hours,
    overtimeHours: 0,
    status
  };
}

function makeWorkedDayResult(dateKey, hours, bonus, status) {
  const pay = calculatePayForHours(hours);
  const roundedBonus = roundMoney(bonus);

  return {
    dateKey,
    base: pay.base,
    overtime: pay.overtime,
    bonus: roundedBonus,
    total: roundMoney(pay.base + pay.overtime + roundedBonus),
    hours,
    overtimeHours: pay.overtimeHours,
    status
  };
}

function makeSessionDayResult(dateKey, session, now, clampStart, bonus, status) {
  const pay = calculateSessionPayForDate(dateKey, session, now, clampStart);
  const roundedBonus = roundMoney(bonus);

  return {
    dateKey,
    base: pay.base,
    overtime: pay.overtime,
    bonus: roundedBonus,
    total: roundMoney(pay.base + pay.overtime + roundedBonus),
    hours: pay.normalHours + pay.overtimeHours,
    overtimeHours: pay.overtimeHours,
    status
  };
}

function calculateSessionPayForDate(dateKey, session, now, clampStart = null) {
  if (!session.overtimeApproved) {
    const hours = getManualWorkedHoursForDate(dateKey, now, clampStart);
    const pay = calculatePayForHours(hours);

    return {
      ...pay,
      normalHours: Math.max(0, hours - pay.overtimeHours)
    };
  }

  const regularEnd = getAutomaticRegularShiftEnd(parseDateKey(dateKey));
  const intervals = getSessionIntervalsForDate(dateKey, session, now, clampStart);
  const normalHours = regularEnd
    ? Math.min(getRegularHoursLimit(), getMergedIntervalMilliseconds(intersectIntervals(intervals, null, regularEnd)) / (60 * 60 * 1000))
    : 0;
  const overtimeHours = regularEnd
    ? getMergedIntervalMilliseconds(intersectIntervals(intervals, regularEnd, null)) / (60 * 60 * 1000)
    : 0;

  return {
    base: roundMoney(normalHours * profile.hourlyWage),
    overtime: roundMoney(overtimeHours * profile.hourlyWage * getOvertimeMultiplier()),
    normalHours,
    overtimeHours
  };
}

function calculatePayForHours(hours) {
  const workedHours = Math.max(0, hours);
  const overtimeAfter = getOvertimeThreshold();
  const overtimeMultiplier = getOvertimeMultiplier();
  const normalHours = Math.min(workedHours, overtimeAfter);
  const overtimeHours = Math.max(0, workedHours - overtimeAfter);

  return {
    base: roundMoney(normalHours * profile.hourlyWage),
    overtime: roundMoney(overtimeHours * profile.hourlyWage * overtimeMultiplier),
    overtimeHours
  };
}

function getWorkedHoursSoFar(now, options = {}) {
  const start = getAutomaticShiftStart(now);

  if (!start) return 0;
  if (now < start) return 0;

  const elapsedMilliseconds = now - start;
  const elapsedHours = elapsedMilliseconds / (60 * 60 * 1000);

  if (options.allowOvertime) {
    return elapsedHours;
  }

  return Math.min(elapsedHours, getRegularHoursLimit());
}

function getAutomaticShiftStart(date) {
  if (!profile || !profile.startTime) return null;

  const [startHour, startMinute] = profile.startTime.split(":").map(Number);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), startHour, startMinute, 0, 0);
}

function getAutomaticRegularShiftEnd(date) {
  const start = getAutomaticShiftStart(date);

  if (!start) return null;

  return new Date(start.getTime() + getRegularHoursLimit() * 60 * 60 * 1000);
}

function hasAutomaticRegularShiftEnded(now, todayKey) {
  if (!isScheduledWorkday(now) || isTimeOffDate(todayKey)) return false;

  const regularEnd = getAutomaticRegularShiftEnd(now);
  if (!regularEnd) return false;

  return now >= regularEnd;
}

function getTodayTimelineText(todayKey, now) {
  const adjustment = getManualAdjustmentForDate(todayKey);

  if (adjustment) {
    return {
      start: t("fixedManual"),
      end: t("fixedTime")
    };
  }

  const session = getWorkSessionForDate(todayKey);

  if (session && session.segments.length) {
    const starts = session.segments
      .map((segment) => new Date(segment.startTimestamp))
      .filter((date) => !Number.isNaN(date.getTime()));
    const ends = session.segments
      .map((segment) => segment.endTimestamp ? new Date(segment.endTimestamp) : null)
      .filter((date) => date && !Number.isNaN(date.getTime()));
    const openSegment = getOpenManualSegment(session);
    const rawWorkedHours = getManualWorkedHoursForDate(todayKey, now, null, { ignoreOvertimeCap: true });
    const regularCompletionTime = !session.overtimeApproved
      ? hasAutomaticRegularShiftEnded(now, todayKey)
        ? getAutomaticRegularShiftEnd(now)
        : rawWorkedHours >= getRegularHoursLimit()
          ? getRegularCompletionTimeForSession(session, todayKey, now)
          : null
      : null;

    return {
      start: starts.length ? formatClockTime(new Date(Math.min(...starts))) : "--",
      end: regularCompletionTime
        ? formatClockTime(regularCompletionTime)
        : openSegment
          ? `${t("currentTime")} (${formatClockTime(now)})`
          : ends.length
            ? formatClockTime(new Date(Math.max(...ends)))
            : "--"
    };
  }

  const automaticStart = getAutomaticShiftStart(now);
  const day = getDayEarnings(startOfDay(now), now, { allowPartialToday: true });

  if (!automaticStart || day.hours === 0) {
    return {
      start: automaticStart ? formatClockTime(automaticStart) : "--",
      end: t("notStarted")
    };
  }

  if (day.status === "shift ended") {
    return {
      start: formatClockTime(automaticStart),
      end: formatClockTime(new Date(automaticStart.getTime() + getRegularHoursLimit() * 60 * 60 * 1000))
    };
  }

  return {
    start: formatClockTime(automaticStart),
    end: `${t("currentTime")} (${formatClockTime(now)})`
  };
}

function getCurrentEarningsRate(todaySummary) {
  if (!profile || !todaySummary) return 0;

  const now = new Date();
  const todayKey = formatDateKey(now);
  const session = getWorkSessionForDate(todayKey);
  const openSegment = getOpenManualSegment(session);

  if (
    getManualAdjustmentForDate(todayKey) ||
    isSessionEnded(session) ||
    isSessionPaused(session) ||
    Array.from(todaySummary.statuses).includes("shift ended") ||
    isTimeOffDate(todayKey) ||
    (!openSegment && !isScheduledWorkday(now)) ||
    todaySummary.hours <= 0
  ) {
    return 0;
  }

  const isApprovedOvertime = session && session.overtimeApproved && openSegment;
  const hourlyRate = isApprovedOvertime || todaySummary.overtimeHours > 0
    ? profile.hourlyWage * getOvertimeMultiplier()
    : profile.hourlyWage;

  return hourlyRate / 3600;
}

function getTodayWorkStatus(summary) {
  const now = new Date();
  const todayKey = formatDateKey(now);
  const todaySession = getWorkSessionForDate(todayKey);
  const openSegment = getOpenManualSegment(todaySession);

  if (getManualAdjustmentForDate(todayKey)) {
    return { name: "clocked-out", translationKey: "clockedOut", tooltipKey: "statusClockedOutTooltip" };
  }

  if (isSessionEnded(todaySession)) {
    return { name: "clocked-out", translationKey: "clockedOut", tooltipKey: "statusClockedOutTooltip" };
  }

  if (isSessionPaused(todaySession)) {
    return { name: "paused", translationKey: "paused", tooltipKey: "statusPausedTooltip" };
  }

  if (Array.from(summary.statuses).includes("shift ended")) {
    return { name: "shift-ended", translationKey: "shiftEnded", tooltipKey: "statusShiftEndedTooltip" };
  }

  if (todaySession && todaySession.overtimeApproved && openSegment) {
    return { name: "overtime", translationKey: "overtime", tooltipKey: "statusOvertimeTooltip" };
  }

  if (summary.overtimeHours > 0) {
    return { name: "overtime", translationKey: "overtime", tooltipKey: "statusOvertimeTooltip" };
  }

  if (openSegment || summary.hours > 0) {
    return { name: "working", translationKey: "working", tooltipKey: "statusWorkingTooltip" };
  }

  return { name: "before", translationKey: "beforeShift", tooltipKey: "statusBeforeTooltip" };
}

function getStatusText(range, summary) {
  if (range === "day") {
    const todaySession = getWorkSessionForDate(formatDateKey(new Date()));
    const statuses = Array.from(summary.statuses);
    const status = statuses[0] || "scheduled";

    if (status === "day off") return t("dayOff");
    if (status === "manual override") return t("adjustmentSavedMessage");
    if (status === "shift ended") return t("shiftEndedMessage");

    if (todaySession && todaySession.segments.length) {
      if (todaySession.overtimeApproved && getOpenManualSegment(todaySession)) {
        return t("dayOvertime");
      }

      if (getOpenManualSegment(todaySession)) {
        return t("savedSessionActive");
      }

      if (isSessionPaused(todaySession)) {
        return t("pausedMessage");
      }

      return t("savedSessionClosed");
    }

    if (summary.overtimeHours > 0) return t("dayOvertime");
    if (status === "working now") return t("dayWorking");
    if (status === "shift ended") return t("shiftEndedMessage");
    if (status === "worked") return t("dayWorked");
    if (status === "paused") return t("pausedMessage");
    if (status === "non-workday") return t("nonWorkday");
    if (status === "scheduled") return t("scheduled");
  }

  return t("rangeStatus");
}

function formatHistoryStatus(status) {
  if (language === "zh") {
    if (status === "day off") return "休假";
    if (status === "non-workday") return "非工作日";
    if (status === "paused") return "已暂停";
    if (status === "shift ended") return "班次已结束";
    if (status === "clocked out") return "已下班";
    if (status === "manual override") return "手动调整";
    return "已工作";
  }

  if (status === "day off") return "day off";
  if (status === "non-workday") return "non-workday";
  if (status === "paused") return "paused";
  if (status === "shift ended") return "shift ended";
  if (status === "clocked out") return "clocked out";
  if (status === "manual override") return "manual adjustment";
  return "worked";
}

function isScheduledWorkday(date) {
  return profile.workdays.includes(date.getDay());
}

function isTimeOffDate(dateKey) {
  return timeOffRecords.some((record) => record.date === dateKey);
}

function getBonusForDate(dateKey) {
  return bonusRecords
    .filter((record) => record.date === dateKey)
    .reduce((sum, record) => sum + Number(record.amount), 0);
}

function getBonusTypesForDate(dateKey) {
  const types = bonusRecords
    .filter((record) => record.date === dateKey)
    .map((record) => formatBonusType(record.type))
    .filter(Boolean);

  return [...new Set(types)].join(", ") || "--";
}

function normalizeBonusType(type) {
  return ["Performance", "Tips", "Gift", "Other"].includes(type) ? type : "Other";
}

function formatBonusType(type) {
  const normalized = normalizeBonusType(type);
  return t(`bonusType${normalized}`);
}

function getOvertimeThreshold() {
  const value = Number(profile && profile.overtimeAfter);
  return Number.isFinite(value) && value >= 0 ? value : Number(profile && profile.hoursPerDay) || 0;
}

function getOvertimeMultiplier() {
  const value = Number(profile && profile.overtimeMultiplier);
  return Number.isFinite(value) && value >= 1 ? value : 1.5;
}

function getRegularHoursLimit() {
  const overtimeThreshold = getOvertimeThreshold();
  return overtimeThreshold > 0 ? overtimeThreshold : Number(profile && profile.hoursPerDay) || 0;
}

function getYearsInDateSpan(start, end) {
  const years = [];
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();

  for (let year = startYear; year <= endYear; year += 1) {
    years.push(year);
  }

  return years;
}

function calculateStreak(now) {
  const trackingStart = getTrackingStartDateTime();
  if (!trackingStart) return 0;

  const startKey = formatDateKey(trackingStart);
  let cursor = startOfDay(now);
  let streak = 0;

  while (formatDateKey(cursor) >= startKey) {
    const day = getDayEarnings(cursor, now, { allowPartialToday: true });

    if (day.hours > 0 || day.total > 0) {
      streak += 1;
      cursor = addDays(cursor, -1);
      continue;
    }

    break;
  }

  return streak;
}

function syncHistoryDateFilter(trackingStart, now) {
  const minDateKey = formatDateKey(startOfDay(trackingStart));
  const maxDateKey = formatDateKey(startOfDay(now));

  elements.historyStartDate.min = minDateKey;
  elements.historyStartDate.max = maxDateKey;
  elements.historyEndDate.min = minDateKey;
  elements.historyEndDate.max = maxDateKey;

  if (!elements.historyStartDate.value) {
    elements.historyStartDate.value = minDateKey;
  }

  if (!elements.historyEndDate.value) {
    elements.historyEndDate.value = maxDateKey;
  }

  let startKey = clampDateKey(elements.historyStartDate.value, minDateKey, maxDateKey);
  let endKey = clampDateKey(elements.historyEndDate.value, minDateKey, maxDateKey);

  if (startKey > endKey) {
    endKey = startKey;
  }

  elements.historyStartDate.value = startKey;
  elements.historyEndDate.value = endKey;

  return {
    start: parseDateKey(startKey),
    end: parseDateKey(endKey)
  };
}

function ensureTrackingStartForExistingProfile() {
  if (profile && !getTrackingStartDateTime()) {
    saveTrackingStartIfNeeded();
  }
}

function saveTrackingStartIfNeeded() {
  if (getTrackingStartDateTime()) return;

  trackingStartTimestamp = new Date().toISOString();
  writeStorage(STORAGE_KEYS.trackingStart, trackingStartTimestamp);
}

function getTrackingStartDateTime() {
  if (!trackingStartTimestamp) return null;

  const date = new Date(trackingStartTimestamp);
  return Number.isNaN(date.getTime()) ? null : date;
}

function showHistoryEmptyState(message) {
  elements.historyEmptyState.textContent = message;
  elements.historyEmptyState.classList.remove("hidden");
  elements.dailyHistoryTable.innerHTML = emptyRow(message, 6);
  elements.weeklyHistoryTable.innerHTML = emptyRow(message, 4);
  elements.monthlyHistoryTable.innerHTML = emptyRow(message, 4);
  elements.yearlyHistoryTable.innerHTML = emptyRow(message, 4);
}

function getWorkSessionForDate(dateKey) {
  return workSessions.find((session) => session.date === dateKey) || null;
}

function ensureWorkSession(dateKey) {
  let session = getWorkSessionForDate(dateKey);

  if (session) return session;

  session = {
    date: dateKey,
    endedAt: "",
    overtimeApproved: false,
    segments: []
  };
  workSessions.push(session);
  workSessions.sort((a, b) => a.date.localeCompare(b.date));
  return session;
}

function getOpenManualSegment(session) {
  if (!session) return null;
  return session.segments.find((segment) => !segment.endTimestamp) || null;
}

function isSessionEnded(session) {
  if (!session) return false;
  if (session.endedAt) return true;

  const hasEndedAtFlag = Object.prototype.hasOwnProperty.call(session, "endedAt");
  return !hasEndedAtFlag && session.segments.length > 0 && !getOpenManualSegment(session);
}

function isSessionPaused(session) {
  if (!session || !session.segments.length || getOpenManualSegment(session) || isSessionEnded(session)) return false;
  return Object.prototype.hasOwnProperty.call(session, "endedAt");
}

function persistWorkSessions() {
  workSessions = normalizeWorkSessions(workSessions).filter((session) => Array.isArray(session.segments) && session.segments.length > 0);
  writeStorage(STORAGE_KEYS.workSessions, workSessions);
}

function persistManualAdjustments() {
  if (Object.keys(manualAdjustments).length) {
    writeStorage(STORAGE_KEYS.manualAdjustments, manualAdjustments);
    return;
  }

  localStorage.removeItem(STORAGE_KEYS.manualAdjustments);
}

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function startOfWeek(date) {
  const start = startOfDay(date);
  start.setDate(start.getDate() - start.getDay());
  return start;
}

function endOfWeek(date) {
  return addDays(startOfWeek(date), 6);
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function minDate(first, second) {
  return first < second ? first : second;
}

function maxDate(first, second) {
  return first > second ? first : second;
}

function datesBetween(start, end) {
  const dates = [];
  for (let cursor = startOfDay(start); cursor <= startOfDay(end); cursor = addDays(cursor, 1)) {
    dates.push(new Date(cursor));
  }
  return dates;
}

function clampDateKey(value, minKey, maxKey) {
  if (!value) return minKey;
  if (value < minKey) return minKey;
  if (value > maxKey) return maxKey;
  return value;
}

function parseDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDisplayDate(dateKey) {
  const date = parseDateKey(dateKey);
  return `${DAY_NAMES[date.getDay()]}, ${date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric"
  })}`;
}

function formatShortDate(date) {
  return date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function formatClockTime(date) {
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}

function formatMoney(value) {
  const symbol = currency === "RMB" ? "¥" : "$";
  return `${symbol}${roundMoney(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function formatRatePerSecond(value) {
  const symbol = currency === "RMB" ? "¥" : "$";

  return `+${symbol}${Number(value).toFixed(4)} / ${t("perSecondUnit")}`;
}

function formatHourlyRateLine(hourlyRate) {
  const symbol = currency === "RMB" ? "¥" : "$";
  const rate = Number(hourlyRate) || 0;
  const perSecond = rate / 3600;

  return `≈ ${symbol}${formatCompactMoney(rate)}/${t("perHourUnit")} → ${symbol}${perSecond.toFixed(4)}/${t("perSecondUnit")}`;
}

function formatCompactMoney(value) {
  return roundMoney(value).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
}

function formatHours(value) {
  const unit = language === "zh" ? "小时" : "hrs";
  return `${roundHours(value).toFixed(2)} ${unit}`;
}

function formatDurationShort(totalHours) {
  const totalMinutes = Math.max(0, Math.round(totalHours * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return language === "zh" ? `${hours}小时 ${minutes}分` : `${hours}h ${minutes}m`;
}

function roundMoney(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

function roundHours(value) {
  return Math.round((Number(value) + Number.EPSILON) * 10000) / 10000;
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function emptyRow(message, columns) {
  return `<tr><td class="empty-row" colspan="${columns}">${escapeHtml(message)}</td></tr>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
