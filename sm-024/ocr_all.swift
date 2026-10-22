// OCR the first page of a PDF with Apple's Vision framework. swift ocr_page1.swift file.pdf
import Foundation
import PDFKit
import Vision
import AppKit
let url = URL(fileURLWithPath: CommandLine.arguments[1])
guard let doc = PDFDocument(url: url) else { exit(1) }
for i in 0..<doc.pageCount { guard let page = doc.page(at: i) else { continue }; print("=== page \(i+1)")
let b = page.bounds(for: .mediaBox); let scale: CGFloat = 2.5
let img = NSImage(size: NSSize(width: b.width*scale, height: b.height*scale))
img.lockFocus(); NSColor.white.set(); NSRect(x: 0, y: 0, width: b.width*scale, height: b.height*scale).fill()
let ctx = NSGraphicsContext.current!.cgContext; ctx.scaleBy(x: scale, y: scale); page.draw(with: .mediaBox, to: ctx); img.unlockFocus()
guard let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else { exit(2) }
let req = VNRecognizeTextRequest(); req.recognitionLevel = .accurate
try VNImageRequestHandler(cgImage: cg).perform([req])
for o in req.results ?? [] { print(o.topCandidates(1).first?.string ?? "") }
}
